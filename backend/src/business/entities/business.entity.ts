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

  @Column({ type: 'varchar', length: 30, default: '' })
  name: string;

  @Column({ type: 'varchar', length: 30, default: '' })
  nit: string;

  @Column({ type: 'varchar', length: 30, default: '' })
  phone: string;

  @Column({ type: 'varchar', length: 200, default: '' })
  direction: string;

  @Column({ type: 'decimal', precision: 10, scale: 2, default: 0.0 })
  comission: number;

  @Column({ type: 'int', default: 15 })
  interest: number;

  @Column({ type: 'decimal', precision: 6, scale: 2, default: 0.0 })
  cambioDolar: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
