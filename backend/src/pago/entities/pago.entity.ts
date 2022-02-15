import { Amortizacion } from 'src/amortizacion/entities/amortizacion.entity';
import { Client } from 'src/client/entities/client.entity';
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
export class Pago extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Amortizacion, (amortizacion) => amortizacion.id)
  amortizacion: Amortizacion;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoAdministracion: string;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoPiso: string;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoPago: string;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoTotal: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
