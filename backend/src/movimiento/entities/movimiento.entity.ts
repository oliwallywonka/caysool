import { Apertura } from 'src/apertura/entities/apertura.entity';
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
export class Movimiento extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Apertura, (movimiento) => movimiento.id)
  apertura: Apertura;

  //ESTADO: 1 = INGRESO  0 = SALIDA
  @Column({ type: 'boolean', default: true })
  tipo: boolean;

  @Column({ type: 'varchar', length: 80, default: 'INGRESO DINERO' })
  concepto: string;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  cantidad: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
