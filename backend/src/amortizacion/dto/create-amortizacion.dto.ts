import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from 'class-validator';
export class CreateAmortizacionDto {
  @IsNotEmpty({ message: 'El campo nombre no puede ir vacio' })
  @IsInt()
  prestamo: number;

  @IsNotEmpty()
  @IsNumber()
  pagoInicial: number;

  @IsOptional()
  @IsNumber()
  costoPrestamo: number;

  @IsNotEmpty()
  @IsNumber()
  interes: number;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
