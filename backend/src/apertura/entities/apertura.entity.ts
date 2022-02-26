import { Caja } from 'src/caja/entities/caja.entity';
import { Movimiento } from 'src/movimiento/entities/movimiento.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  OneToMany,
} from 'typeorm';

import moment = require('moment');
@Entity()
export class Apertura extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Caja, (caja) => caja.id)
  caja: Caja;

  @OneToMany(() => Movimiento, (movimiento) => movimiento.apertura)
  movimientos: Movimiento[];

  //ESTADO: 1 = ACTIVO  0 = CERRADO
  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  montoApertura: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  montoCierre: number;

  @Column({ type: 'datetime', nullable: true })
  fechaApertura: Date;

  @Column({ type: 'datetime', nullable: true })
  fechaCierre: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  async calculateMontoCierre() {
    const today = moment(Date.now()).toDate();
    let montoCierre = 0;
    const ingresos = await Movimiento.createQueryBuilder('movimiento')
      .select('SUM(movimiento.cantidad)', 'cantidad')
      .where('movimiento.apertura = :aperturaId', { aperturaId: this.id })
      .andWhere('movimiento.tipo = :tipo', { tipo: true })
      .getRawOne();
    const salidas = await Movimiento.createQueryBuilder('movimiento')
      .select('SUM(movimiento.cantidad)', 'cantidad')
      .where('movimiento.apertura = :aperturaId', { aperturaId: this.id })
      .andWhere('movimiento.tipo = :tipo', { tipo: false })
      .getRawOne();

    montoCierre += +ingresos.cantidad;
    montoCierre -= +salidas.cantidad;
    this.montoCierre = montoCierre;
    this.fechaCierre = today;
    this.estado = false;
  }
}
