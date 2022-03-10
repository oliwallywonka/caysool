import { Business } from 'src/business/entities/business.entity';
import { Client } from 'src/client/entities/client.entity';
import { ImpresionDoc } from 'src/impresion-doc/entities/impresion-doc.entity';
import { Inventario } from 'src/inventario/entities/inventario.entity';
import { Pago } from 'src/pago/entities/pago.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  Index,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

import moment = require('moment');
import { Transform } from 'class-transformer';
@Entity()
export class Prestamo extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @ManyToOne(() => Client, (client) => client.id)
  client: Client;

  @OneToMany(() => Inventario, (inventario) => inventario.prestamo)
  inventario: Inventario[];

  @Column({ type: 'timestamp', nullable: true })
  fechaInicio: string;

  @Column({ type: 'timestamp', nullable: true })
  fechaLimite: string;

  @Column({ type: 'timestamp', nullable: true })
  fechaFinal: string;

  @Index()
  @Column({ type: 'varchar', length: 10, default: 'ACTIVO' })
  estado: string;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoImpresion: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoAdministracion: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoPiso: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoCancelado: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoPrestamo: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoInteres: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoTotal: number;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  dateCalculate() {
    this.fechaInicio = moment(this.fechaInicio)
      .startOf('day')
      .format('YYYY-MM-DD HH:mm:ss');
    this.fechaFinal = moment(this.fechaFinal)
      .endOf('day')
      .format('YYYY-MM-DD HH:mm:ss');
  }

  async calculateCostoTotal() {
    //const interes = await Business.findOne(1);
    const interes = 0.15;
    //Formula Para Prestamo
    //DIAS MINIMO 5
    const diaInicio = moment(this.fechaInicio).startOf('day');
    const diaFinal = moment(this.fechaFinal).endOf('day');
    const day = moment(Date.now()).startOf('day');
    const today = moment.duration(diaFinal.diff(day)).asDays();
    const dias = moment.duration(diaFinal.diff(diaInicio)).asDays();
    const costoTotal =
      this.costoPrestamo * (1 + interes / 30) ** (dias < 5 ? 5 : dias);
    const costoInteres = costoTotal - this.costoPrestamo;
    this.costoTotal = +costoTotal.toFixed(1);
    this.costoInteres = costoInteres;
    if (this.costoCancelado < this.costoTotal) {
      if (today > 0) {
        this.estado = 'ACTIVO';
      } else {
        this.estado = 'VENCIDO';
      }
    }
    if (this.costoCancelado >= this.costoTotal) {
      this.estado = 'CANCELADO';
    }
  }

  async calculateCostoPrestamo() {
    const costoPrestamo = await Inventario.createQueryBuilder('inventario')
      .select('SUM(inventario.costoPrestamo)', 'costo')
      .where('inventario.prestamo = :prestamo', { prestamo: this.id })
      .getRawOne();
    this.costoPrestamo = +costoPrestamo.costo;
  }

  async calculateCostoCancelado() {
    const costoPago = await Pago.createQueryBuilder('pago')
      .select('SUM(pago.costoPago)', 'costoCancelado')
      .addSelect('SUM(pago.costoPiso)', 'costoPiso')
      .addSelect('SUM(pago.costoAdministracion)', 'costoAdministracion')
      .where('pago.prestamo = :prestamo', { prestamo: this.id })
      .getRawOne();
    if (!costoPago) {
      this.costoCancelado = 0.0;
      this.costoPiso = 0.0;
      this.costoAdministracion = 0.0;
    } else {
      this.costoCancelado = +costoPago.costoCancelado;
      this.costoPiso = +costoPago.costoPiso;
      this.costoAdministracion = +costoPago.costoAdministracion;
    }
    const diaFinal = moment(this.fechaFinal);
    const day = moment(Date.now()).startOf('day');
    const today = moment.duration(diaFinal.diff(day)).asDays();
    if (this.costoCancelado < this.costoTotal) {
      if (today > 0) {
        this.estado = 'ACTIVO';
      } else {
        this.estado = 'VENCIDO';
      }
    }
    if (this.costoCancelado >= this.costoTotal) {
      this.estado = 'CANCELADO';
    }
  }

  async calculateCostoImpresion() {
    const costoImpresion = await ImpresionDoc.createQueryBuilder('impresion')
      .select('SUM(impresion.costoImpresion)', 'costo')
      .where('impresion.prestamo = :prestamo', { prestamo: this.id })
      .getRawOne();
    this.costoImpresion = +costoImpresion.costo;
  }
}
