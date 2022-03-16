import {
  IsBoolean,
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
  @IsBoolean()
  tipo: boolean;

  @IsOptional()
  @IsBoolean()
  relaciones: boolean;

  @IsNotEmpty()
  @IsString()
  concepto: string;

  @IsNotEmpty()
  @IsNumber()
  cantidad: number;
}
