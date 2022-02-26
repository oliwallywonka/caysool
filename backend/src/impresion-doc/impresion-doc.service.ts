import { BadRequestException, Injectable } from '@nestjs/common';
import { AuditService } from 'src/audit/audit.service';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
import { CreateImpresionDocDto } from './dto/create-impresion-doc.dto';
import { UpdateImpresionDocDto } from './dto/update-impresion-doc.dto';
import { ImpresionDoc } from './entities/impresion-doc.entity';

@Injectable()
export class ImpresionDocService {
  constructor(private readonly auditService: AuditService) {}

  async create(createImpresionDocDto: CreateImpresionDocDto, user) {
    const prestamo = await this.findPrestamoById(
      createImpresionDocDto.prestamo,
    );
    const impresion = ImpresionDoc.create(createImpresionDocDto);
    await impresion.save();
    await prestamo.calculateCostoImpresion();
    await prestamo.save();
    this.auditService.audit({
      action: 'Se creo un nuevo registro',
      auditTable: 'IMPRESIONES',
      previusData: {},
      actualData: impresion,
      user: user,
    });
    return impresion;
  }

  async findByPrestamoId(prestamoId: number) {
    const impresiones = await ImpresionDoc.createQueryBuilder('impresion')
      .where('impresion.prestamo = :prestamoId', { prestamoId })
      .getMany();
    return impresiones;
  }

  async update(id: number, updateImpresionDocDto: UpdateImpresionDocDto, user) {
    const impresion = await this.findImpresionById(id);
    const prevImpresion = { ...impresion };
    const prestamo = await this.findPrestamoById(impresion.prestamo);
    ImpresionDoc.merge(impresion, updateImpresionDocDto);
    await impresion.save();
    if (updateImpresionDocDto.costoImpresion) {
      await prestamo.calculateCostoImpresion();
      await prestamo.save();
    }
    this.auditService.audit({
      action: `Se edito el registro ${id}`,
      auditTable: 'IMPRESIONES',
      previusData: prevImpresion,
      actualData: updateImpresionDocDto,
      user: user,
    });
    return { message: 'impresion editada exitosamente' };
  }

  async remove(id: number, user) {
    const impresion = await this.findImpresionById(id);
    const prestamo = await this.findPrestamoById(impresion.prestamo);
    const prevImpresion = { ...impresion };
    await impresion.remove();
    await prestamo.calculateCostoImpresion();
    await prestamo.save();
    this.auditService.audit({
      action: `Se elimino el registro ${id}`,
      auditTable: 'Impresiones',
      previusData: prevImpresion,
      actualData: {},
      user: user,
    });
    return { message: 'Impresion eliminada correctamente' };
  }

  async findImpresionById(id: number) {
    const impresion = await ImpresionDoc.findOne(id);
    if (!impresion)
      throw new BadRequestException({
        message: 'NO se encontro el registro de la impresión',
      });
    return impresion;
  }
  async findPrestamoById(id: any) {
    const prestamo = await Prestamo.findOne(id);
    if (!prestamo)
      throw new BadRequestException({ message: ' Prestamo no encontrado ' });
    return prestamo;
  }

  async getImpresionesByDate({ from = '', to = '' }) {
    const impresiones = await ImpresionDoc.createQueryBuilder('impresion')
      .where('impresion.createdAt >= :from', { from })
      .andWhere('impresion.createdAt <= :to', { to })
      .getMany();
    return impresiones;
  }
}
