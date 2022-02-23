import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Apertura } from 'src/apertura/entities/apertura.entity';
import { Caja } from 'src/caja/entities/caja.entity';

export class CreateMovimientoDto {
  @IsNotEmpty({ message: 'El campo nombre no puede ir vacio' })
  @IsInt()
  apertura: Apertura;

  @IsNotEmpty()
  @IsString()
  tipo: boolean;

  @IsNotEmpty()
  @IsNumber()
  concepto: number;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;

  @IsNotEmpty()
  @IsString()
  fechaApertura: string;

  @IsOptional()
  @IsString()
  fechaCierre: string;
}
