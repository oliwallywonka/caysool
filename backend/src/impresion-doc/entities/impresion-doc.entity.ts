import { Client } from 'src/client/entities/client.entity';
import { Movimiento } from 'src/movimiento/entities/movimiento.entity';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from 'typeorm';

@Entity()
export class ImpresionDoc extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @OneToOne(() => Movimiento)
  @JoinColumn()
  movimiento: Movimiento;

  @ManyToOne(() => Prestamo, (prestamo) => prestamo.id)
  prestamo: Prestamo;

  @Column({ type: 'varchar', length: 10, default: 'CONTRATO' })
  tipoDocumento: string;

  @Column({ type: 'decimal', precision: 5, scale: 1, default: 0.0 })
  costoImpresion: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
