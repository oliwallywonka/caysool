import { Pago } from 'src/pago/entities/pago.entity';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Amortizacion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Prestamo, (prestamo) => prestamo.id)
  prestamo: Prestamo;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoPago: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
