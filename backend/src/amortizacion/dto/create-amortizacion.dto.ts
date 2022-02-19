import { IsInt, IsNotEmpty, IsNumber } from 'class-validator';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
export class CreateAmortizacionDto {
  @IsNotEmpty({ message: 'El campo nombre no puede ir vacio' })
  @IsInt()
  prestamo: Prestamo;

  @IsNotEmpty()
  @IsNumber()
  costoPago: number;
}
