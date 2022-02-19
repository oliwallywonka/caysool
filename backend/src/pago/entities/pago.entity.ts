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
  AfterUpdate,
  AfterInsert,
} from 'typeorm';

@Entity()
export class Pago extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Prestamo, (prestamo) => prestamo.id)
  prestamo: Prestamo;

  //INTERES o PRESTAMO
  @Column({ type: 'varchar', length: 10, default: 'PRESTAMO' })
  tipoPago: string;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoAdministracion: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoPiso: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoPago: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoTotal: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @AfterUpdate()
  @AfterInsert()
  calculateCostoTotal() {
    this.costoTotal =
      this.costoAdministracion + this.costoPiso + this.costoPago;
  }
}
