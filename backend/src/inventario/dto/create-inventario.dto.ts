import {
  IsBoolean,
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
export class CreateInventarioDto {
  @IsNotEmpty({ message: 'El campo nombre no puede ir vacio' })
  @IsInt()
  prestamo: Prestamo;

  @IsOptional()
  @IsString()
  tipo: string;

  @IsOptional()
  @IsNumber()
  precioVenta: number;

  @IsOptional()
  @IsNumber()
  precioAvaluo: number;

  @IsNotEmpty()
  @IsNumber()
  costoPrestamo: number;

  @IsOptional()
  @IsString()
  @Min(2)
  @Max(70)
  descripcion: string;

  @IsOptional()
  @IsString()
  @Min(2)
  @Max(70)
  observacion: string;

  //Articulo
  @IsOptional()
  marca?: string;

  @IsOptional()
  modelo: string;

  @IsOptional()
  serie: string;

  //Vehiculo
  @IsOptional()
  linea: string;

  @IsOptional()
  placa: string;

  @IsOptional()
  chasis: string;

  @IsOptional()
  deuda: string;

  @IsOptional()
  ruat: string;

  //JOYA
  @IsOptional()
  metal?: string;

  @IsOptional()
  peso?: string;

  @IsOptional()
  pureza?: string;
}
