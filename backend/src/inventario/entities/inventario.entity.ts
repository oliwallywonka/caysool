import { Picture } from 'src/picture/entities/picture.entity';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  OneToMany,
  BeforeInsert,
  BeforeUpdate,
} from 'typeorm';

import moment = require('moment');

@Entity()
export class Inventario extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Prestamo, (prestamo) => prestamo.id)
  prestamo: Prestamo;

  @OneToMany(() => Picture, (picture) => picture.inventario)
  pictures: Picture[];

  @Column({ type: 'varchar', length: 12, default: 'EMPENADO' })
  estado: string;

  @Column({ type: 'varchar', length: 12, default: 'ARTICULO' })
  tipo: string;

  @Column({ type: 'varchar', length: 70, default: 'NINGUNO' })
  descripcion: string;

  @Column({ type: 'varchar', length: 70, default: 'NINGUNO' })
  observacion: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  marca: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  modelo: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  linea: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  serie: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  placa: string;

  @Column({ type: 'varchar', length: 30, nullable: true })
  chasis: string;

  @Column({ type: 'varchar', length: 15, nullable: true })
  deuda: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  ruat: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  metal: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  peso: string;

  @Column({ type: 'varchar', length: 20, nullable: true })
  pureza: string;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  precioVenta: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoCompra: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  precioAvaluo: number;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoPrestamo: number;

  @Column({ type: 'datetime', nullable: true })
  fechaCompra: string;

  @Column({ type: 'datetime', nullable: true })
  fechaVenta: string;

  @Column({ type: 'datetime', nullable: true })
  fechaDevolucion: string;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @BeforeInsert()
  @BeforeUpdate()
  setDateByState() {
    switch (this.estado) {
      case 'COMPRADO':
        this.fechaCompra = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        break;
      case 'VENDIDO':
        this.fechaVenta = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        break;
      case 'DEVUELTO':
        this.fechaDevolucion = moment(Date.now()).format('YYYY-MM-DD HH:mm:ss');
        console.log(this.fechaDevolucion);
        break;
      default:
        break;
    }
  }
}
