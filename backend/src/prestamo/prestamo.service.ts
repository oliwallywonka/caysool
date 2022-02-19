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
import { Connection } from 'typeorm';
@Injectable()
export class PrestamoService {
  constructor(
    private connection: Connection,
    private readonly auditService: AuditService,
    private readonly inventarioService: InventarioService,
    private sheduleRegistry: SchedulerRegistry,
  ) {
    //this.addCronJob('fas', '12');
    this.updatePrestamoStatus();
  }

  async create(createPrestamoDto: CreatePrestamoDto, user) {
    const prestamo = Prestamo.create(createPrestamoDto);
    const prestamoSaved = await Prestamo.save(prestamo);
    this.auditService.audit({
      action: 'Se creo un nuevo registro',
      auditTable: 'PRESTAMO',
      previusData: {},
      actualData: prestamoSaved,
      user: user,
    });
    if (createPrestamoDto.inventario.length > 0) {
      for (const inv in createPrestamoDto.inventario) {
        createPrestamoDto.inventario[inv].prestamo = prestamoSaved;
        await this.inventarioService.create(
          createPrestamoDto.inventario[inv],
          user,
        );
      }
    }
    return prestamoSaved;
  }

  async findAll(options: IPaginationOptions, clientCi: string, estado: string) {
    const prestamos = Prestamo.createQueryBuilder('prestamo')
      .leftJoinAndSelect('prestamo.client', 'client')
      .leftJoinAndSelect('prestamo.inventario', 'invnetario')
      .where(`client.ci LIKE '%${clientCi ? clientCi : ''}%'`)
      .andWhere(`prestamo.estado LIKE '%${estado ? estado : ''}%'`)
      .orderBy('prestamo.id', 'DESC');
    return await paginate<Prestamo>(prestamos, options);
  }

  findOne(id: number) {
    const prestamo = Prestamo.createQueryBuilder('prestamo')
      .leftJoinAndSelect('prestamo.client', 'client')
      .leftJoinAndSelect('prestamo.inventario', 'inventario')
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
      }
    }
    await queryRunner.release();
  }
}
