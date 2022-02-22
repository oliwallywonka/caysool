import { Caja } from 'src/caja/entities/caja.entity';
import { User } from 'src/user/entities/user.entity';
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
export class Apertura extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Caja, (caja) => caja.id)
  caja: Caja;

  //ESTADO: 1 = ACTIVO  0 = CERRADO
  @Column({ type: 'boolean', default: true })
  estado: boolean;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  montoApertura: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  montoCierre: number;

  @Column({ type: 'date', nullable: true })
  fechaApertura: Date;

  @Column({ type: 'date', nullable: true })
  fechaCierre: Date;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
