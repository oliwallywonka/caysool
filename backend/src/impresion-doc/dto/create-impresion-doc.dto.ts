import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Movimiento } from 'src/movimiento/entities/movimiento.entity';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';

export class CreateImpresionDocDto {
  @IsNotEmpty({ message: 'El campo nombre no puede ir vacio' })
  @IsInt()
  prestamo: Prestamo;

  @IsNotEmpty()
  @IsString()
  tipoDocumento: string;

  @IsOptional()
  @IsInt()
  movimiento: Movimiento;

  @IsNotEmpty()
  @IsNumber()
  costoImpresion: number;
}
