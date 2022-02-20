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
  BeforeUpdate,
  Index,
  OneToMany,
} from 'typeorm';

import moment = require('moment');
import { Amortizacion } from 'src/amortizacion/entities/amortizacion.entity';
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

  @Column({ type: 'date', nullable: true })
  fechaInicio: Date;

  @Column({ type: 'date', nullable: true })
  fechaLimite: Date;

  @Column({ type: 'date', nullable: true })
  fechaFinal: Date;

  @Index()
  @Column({ type: 'varchar', length: 10, default: 'ACTIVO' })
  estado: string;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoImpresion: number;

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

  async calculateCostoTotal() {
    //const interes = await Business.findOne(1);
    const interes = 0.15;
    //Formula Para Prestamo
    //DIAS MINIMO 5
    const diaInicio = moment(this.fechaInicio);
    const diaFinal = moment(this.fechaFinal);
    const day = moment(Date.now());
    const today = moment.duration(day.diff(diaFinal)).asDays();
    const dias = moment.duration(diaFinal.diff(diaInicio)).asDays();
    const costoTotal =
      this.costoPrestamo * (1 + interes / 30) ** (dias < 5 ? 5 : dias);
    const costoInteres = costoTotal - this.costoPrestamo;
    this.costoTotal = costoTotal;
    this.costoInteres = costoInteres;
    if (this.costoCancelado < this.costoTotal) {
      if (today > 1) {
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
      .where('pago.prestamo = :prestamo', { prestamo: this.id })
      .getRawOne();

    if (!costoPago) {
      this.costoCancelado = 0.0;
    } else {
      this.costoCancelado = +costoPago.costoCancelado;
    }
    const diaFinal = moment(this.fechaFinal);
    const day = moment(Date.now());
    const today = moment.duration(day.diff(diaFinal)).asDays();
    if (this.costoCancelado < this.costoTotal) {
      if (today > 1) {
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
