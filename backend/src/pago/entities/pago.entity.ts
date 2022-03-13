import { Movimiento } from 'src/movimiento/entities/movimiento.entity';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  BeforeUpdate,
  BeforeInsert,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class Pago extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Movimiento)
  @JoinColumn()
  movimiento: Movimiento;

  @ManyToOne(() => Prestamo, (prestamo) => prestamo.id)
  prestamo: Prestamo;

  //INTERES o PRESTAMO AMORTIZACION
  @Column({ type: 'varchar', length: 12, default: 'PRESTAMO' })
  tipoPago: string;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoAdministracion: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoPiso: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoInteres: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoPago: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoTotal: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  calculateCostoTotal() {
    this.costoTotal =
      +this.costoAdministracion +
      +this.costoPiso +
      +this.costoPago +
      +this.costoInteres;
  }
}
