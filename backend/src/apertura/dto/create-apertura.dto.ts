import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Caja } from 'src/caja/entities/caja.entity';
export class CreateAperturaDto {
  @IsNotEmpty({ message: 'El campo nombre no puede ir vacio' })
  @IsInt()
  caja: Caja;

  @IsNotEmpty()
  @IsString()
  estado: boolean;

  @IsNotEmpty()
  @IsNumber()
  montoApertura: number;

  @IsNotEmpty()
  @IsNumber()
  montoCierre: number;

  @IsNotEmpty()
  @IsString()
  fechaApertura: string;

  @IsOptional()
  @IsString()
  fechaCierre: string;
}
