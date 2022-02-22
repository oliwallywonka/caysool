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
  BeforeInsert,
  AfterUpdate,
  AfterInsert,
} from 'typeorm';

@Entity()
export class TransaccionMoneda extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  //COMPRA o VENTA
  @Column({ type: 'varchar', length: 6 })
  operacion: string;

  @Column({ type: 'decimal', precision: 10, scale: 1 })
  cantidad: number;

  @Column({ type: 'decimal', precision: 6, scale: 2 })
  tipoCambio: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, default: 6.96 })
  tipoCambioOficial: number;

  @Column({ type: 'decimal', precision: 10, scale: 1 })
  diferencia: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeUpdate()
  @BeforeInsert()
  calculateDiff() {
    if (this.operacion === 'VENTA') {
      this.diferencia =
        this.cantidad * (this.tipoCambio - this.tipoCambioOficial);
    }
    if (this.operacion === 'COMPRA') {
      this.diferencia =
        this.cantidad * (this.tipoCambioOficial - this.tipoCambio);
    }
  }
}
