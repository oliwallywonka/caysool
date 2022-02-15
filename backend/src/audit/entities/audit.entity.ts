import { User } from 'src/user/entities/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  AfterInsert,
} from 'typeorm';

@Entity()
export class Audit extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, (user) => user.id)
  user: User;

  @Column({ type: 'varchar', length: 50 })
  action: string;

  @Column({ type: 'varchar', length: 15 })
  auditTable: string;

  @Column({ type: 'json' })
  previousData: object;

  @Column({ type: 'json' })
  actualData: object;

  @CreateDateColumn()
  createdAt: Date;
}
