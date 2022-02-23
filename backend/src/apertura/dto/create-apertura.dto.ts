import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Caja } from 'src/caja/entities/caja.entity';
export class CreateAperturaDto {
  //@IsNotEmpty({ message: 'El campo caja no puede ir vacio' })
  caja: Caja;

  @IsOptional()
  @IsString()
  estado: boolean;

  @IsNotEmpty()
  @IsNumber()
  montoApertura: number;

  @IsNotEmpty()
  @IsString()
  fechaApertura: string;
}
