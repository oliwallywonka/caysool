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

  @Column({ type: 'varchar', length: 12 })
  direction: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  commission: number;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  interest: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
