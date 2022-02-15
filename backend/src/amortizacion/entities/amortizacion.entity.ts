import { Pago } from 'src/pago/entities/pago.entity';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
  ManyToOne,
  AfterRemove,
  AfterInsert,
  AfterUpdate,
} from 'typeorm';

@Entity()
export class Amortizacion extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Prestamo, (prestamo) => prestamo.id)
  prestamo: Prestamo;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  pagoInicial: string;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoPrestamo: string;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.0 })
  costoCancelado: string;

  @Column({ type: 'decimal', precision: 10, scale: 1, default: 0.15 })
  interes: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @AfterInsert()
  @AfterUpdate()
  @AfterRemove()
  async updatePrestamo() {
    console.log(this);
    const prestamo = await Prestamo.createQueryBuilder('prestamo')
      .where('prestamo.id =: id', { id: this.prestamo.id })
      .getOne();
    const costoCanceladoAmortizacion = await Amortizacion.createQueryBuilder(
      'amortizacion',
    )
      .addSelect('SUM(amortizacion.pagoInicial)', 'costo')
      .where('amortizacion.prestamo =: prestamo', {
        prestamo: this.prestamo.id,
      })
      .getRawMany();
    //const costoCanceladoPagos = await Pago.createQueryBuilder()
    console.log(prestamo, costoCanceladoAmortizacion);
  }
}
