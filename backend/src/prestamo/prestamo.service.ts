import { BadRequestException, Injectable } from '@nestjs/common';
import { SchedulerRegistry } from '@nestjs/schedule';
import { CronJob } from 'cron';
import { IPaginationOptions, paginate } from 'nestjs-typeorm-paginate';
import { AuditService } from 'src/audit/audit.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { Prestamo } from './entities/prestamo.entity';
import { v4 as uuidv4 } from 'uuid';
import { InventarioService } from 'src/inventario/inventario.service';
import moment = require('moment');
import { Connection, Like, Repository } from 'typeorm';
import { AperturaService } from 'src/apertura/apertura.service';
import { InjectRepository } from '@nestjs/typeorm';
@Injectable()
export class PrestamoService {
  constructor(
    @InjectRepository(Prestamo)
    private readonly repository: Repository<Prestamo>,
    private connection: Connection,
    private readonly auditService: AuditService,
    private readonly inventarioService: InventarioService,
    private readonly aperturaService: AperturaService,
    private sheduleRegistry: SchedulerRegistry,
  ) {
    //this.addCronJob('fas', '12');
    this.updatePrestamoStatus();
  }

  async create(createPrestamoDto: CreatePrestamoDto, user) {
    const apertura = await this.aperturaService.getLastApertura();
    const inventario = [...createPrestamoDto.inventario];
    let costoInventario = 0;
    for (const i of inventario) {
      costoInventario += +i.costoPrestamo;
    }
    console.log(costoInventario);
    if (+apertura.montoActual < +costoInventario) {
      throw new BadRequestException({
        message: 'La cantidad ingresada exede a la cantidad actual en caja',
      });
    }
    createPrestamoDto.inventario = null;
    const prestamo = Prestamo.create(createPrestamoDto);
    const prestamoSaved = await Prestamo.save(prestamo);
    await this.auditService.audit({
      action: 'Se creo un nuevo registro',
      auditTable: 'PRESTAMO',
      previusData: {},
      actualData: prestamoSaved,
      user: user,
    });
    if (inventario.length > 0) {
      for (const index in inventario) {
        inventario[index].prestamo = prestamoSaved;
        await this.inventarioService.create(inventario[index], user);
      }
    }
    return prestamoSaved;
  }

  async findAll(options: IPaginationOptions, clientCi: string, estado: string) {
    /*const prestamos = Prestamo.createQueryBuilder('prestamo')
      .leftJoinAndSelect('prestamo.client', 'client')
      .where(`client.ci LIKE '%${clientCi ? clientCi : ''}%'`)
      .andWhere(`prestamo.estado LIKE '%${estado ? estado : ''}%'`)
      .orderBy('prestamo.id', 'DESC');*/
    //Como las relaciones del createQueryBuilder se apilan en leftJoin inventario pasamos a las opciones de busqueda al repository de prestamo
    const pag = await paginate<Prestamo>(this.repository, options, {
      relations: ['inventario', 'client'],
      where: {
        estado: Like(`%${estado ? estado : ''}%`),
        client: {
          ci: Like(`%${clientCi ? clientCi : ''}%`),
        },
      },
      order: {
        createdAt: 'DESC',
      },
    });
    return pag;
  }

  async findOne(id: number) {
    const prestamo = await Prestamo.createQueryBuilder('prestamo')
      .leftJoinAndSelect('prestamo.inventario', 'inventario')
      .leftJoinAndSelect('prestamo.user', 'user')
      .leftJoinAndSelect('prestamo.client', 'client')
      .where('prestamo.id = :id', { id })
      .getOne();
    return prestamo;
  }

  async update(id: number, updatePrestamoDto: UpdatePrestamoDto, user) {
    const date = moment(Date.now());
    const prestamo = await Prestamo.findOne({ id });
    const prevPrestamo = { ...prestamo };
    if (!prestamo)
      throw new BadRequestException({ message: 'Prestamo no encontrado' });
    Prestamo.merge(prestamo, updatePrestamoDto);
    if (updatePrestamoDto.fechaFinal || updatePrestamoDto.fechaInicio) {
      await prestamo.calculateCostoPrestamo();
      await prestamo.calculateCostoTotal();
    }
    await prestamo.save();
    this.auditService.audit({
      action: `Se edito el registro ${id}`,
      auditTable: 'PRESTAMO',
      previusData: prevPrestamo,
      actualData: updatePrestamoDto,
      user: user,
    });
    return prestamo;
  }

  remove(id: number) {
    return `This action removes a #${id} prestamo`;
  }

  async getPrestamosByClientId(clientId: number) {
    const activos = await Prestamo.createQueryBuilder('prestamo')
      .leftJoinAndSelect('prestamo.client', 'client')
      .select('COUNT(prestamo.estado)', 'cantidad')
      .where('client.id = :clientId', { clientId })
      .andWhere('prestamo.estado = :estado', { estado: 'ACTIVO' })
      .getRawOne();
    const vencidos = await Prestamo.createQueryBuilder('prestamo')
      .leftJoinAndSelect('prestamo.client', 'client')
      .select('COUNT(prestamo.estado)', 'cantidad')
      .where('client.id = :clientId', { clientId })
      .andWhere('prestamo.estado = :estado', { estado: 'VENCIDO' })
      .getRawOne();
    const cancelados = await Prestamo.createQueryBuilder('prestamo')
      .leftJoinAndSelect('prestamo.client', 'client')
      .select('COUNT(prestamo.estado)', 'cantidad')
      .where('client.id = :clientId', { clientId })
      .andWhere('prestamo.estado = :estado', { estado: 'CANCELADO' })
      .getRawOne();
    return { activos, vencidos, cancelados };
  }

  private addCronJob(name: string, dias: string) {
    // + 4 Para sincronizar la hora
    const dateToStop = moment(Date.now()).set('hour', 22);
    const uuid = uuidv4();
    const cronTime = `0 0 10-17 */${dias} * `;
    const job = new CronJob(`*/10 * * * * *`, () => {
      console.log('add cron job successifully', dateToStop);
      const lastDate = this.sheduleRegistry.getCronJob(uuid).lastDate();
      const diff = moment.duration(dateToStop.diff(moment(lastDate))).asHours();
      console.log(diff);
      if (diff >= -1 && diff <= 1) {
        this.sheduleRegistry.deleteCronJob(uuid);
      }
    });
    this.sheduleRegistry.addCronJob(uuid, job);
    job.start();
  }

  private async createNotifications() {
    const startOfDay = moment(Date.now()).startOf('day').toDate();
    const endOfDay = moment(Date.now()).endOf('day').toDate();
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    const prestamos = await Prestamo.createQueryBuilder('prestamo')
      .where('prestamo.estado = :estado', { estado: 'ACTIVO' })
      .andWhere('prestamo.fechaFinal >= :startOfDay', { startOfDay })
      .andWhere('prestamo.fechaFinal >= :endOfDay', { endOfDay })
      .getMany();
    if (prestamos.length > 0) {
      for (const prestamo of prestamos) {
      }
    }
    await queryRunner.release();
  }

  private async updatePrestamoStatus() {
    const date = moment(Date.now()).startOf('day').toDate();
    const queryRunner = this.connection.createQueryRunner();
    await queryRunner.connect();
    const prestamos = await Prestamo.createQueryBuilder('prestamo')
      .where('prestamo.estado = :estado', { estado: 'ACTIVO' })
      .andWhere('prestamo.fechaFinal < :date', { date })
      .getMany();
    if (prestamos.length > 0) {
      for (const prestamo of prestamos) {
        prestamo.estado = 'VENCIDO';
        await prestamo.save();
        //DESACTIVADO LA FUNCION DE CAMBIAR AUTOMATICAMENTE EL ESTADO DEL INVENTARIO CUANDO EL PRESTAMO VENCE
        /*const inventario = await Inventario.createQueryBuilder('inventario')
          .where('inventario.prestamo = :prestamo', { prestamo: prestamo.id })
          .getMany();
        if (inventario.length > 0) {
          for (const inv of inventario) {
            inv.estado = 'EN VENTA';
            await inv.save();
          }
        }*/
      }
    }
    await queryRunner.release();
  }

  async getPrestamosByDate({ from = '', to = '', estado = '' }) {
    const prestamos = await Prestamo.createQueryBuilder('prestamo')
      .leftJoinAndSelect('prestamo.client', 'client')
      .leftJoinAndSelect('prestamo.inventario', 'inventario')
      .where('prestamo.createdAt >= :from', { from })
      .andWhere('prestamo.createdAt <= :to', { to })
      .andWhere(`prestamo.estado LIKE '%${estado ? estado : ''}%'`)
      .getMany();
    return prestamos;
  }
}
