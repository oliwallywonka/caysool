import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
export class CreatePagoDto {
  @IsNotEmpty({ message: 'El campo nombre no puede ir vacio' })
  @IsInt()
  prestamo: Prestamo;

  @IsNotEmpty()
  @IsString()
  tipoPago: string;

  @IsNotEmpty()
  @IsNumber()
  costoAdministracion: number;

  @IsNotEmpty()
  @IsNumber()
  costoPiso: number;

  @IsNotEmpty()
  @IsNumber()
  costoPago: number;

  @IsNotEmpty()
  @IsNumber()
  costoTotal: number;
}
