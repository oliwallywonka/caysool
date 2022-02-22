import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';

@Entity()
export class Business extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 20, default: '' })
  name: string;

  @Column({ type: 'varchar', length: 20, default: '' })
  nit: string;

  @Column({ type: 'varchar', length: 20, default: '' })
  phone: string;

  @Column({ type: 'varchar', length: 12, default: '' })
  direction: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  comission: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.15 })
  interest: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  cambioDolar: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
