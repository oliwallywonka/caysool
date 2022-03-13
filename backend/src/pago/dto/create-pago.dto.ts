import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Movimiento } from 'src/movimiento/entities/movimiento.entity';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
export class CreatePagoDto {
  @IsNotEmpty({ message: 'El campo nombre no puede ir vacio' })
  @IsInt()
  prestamo: Prestamo;

  @IsOptional()
  @IsInt()
  movimiento: Movimiento;

  @IsNotEmpty()
  @IsString()
  tipoPago: string;

  @IsNotEmpty()
  @IsNumber()
  costoAdministracion: number;

  @IsNotEmpty()
  @IsNumber()
  costoInteres: number;

  @IsNotEmpty()
  @IsNumber()
  costoPiso: number;

  @IsNotEmpty()
  @IsNumber()
  costoPago: number;
}
