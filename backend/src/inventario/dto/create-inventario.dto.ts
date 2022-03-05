import {
  IsInt,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';
export class CreateInventarioDto {
  @IsOptional()
  @IsInt()
  prestamo: Prestamo;

  @IsOptional()
  @IsString()
  estado: string;

  @IsOptional()
  @IsString()
  tipo: string;

  @IsOptional()
  @IsNumber()
  precioVenta: number;

  @IsOptional()
  @IsNumber()
  precioAvaluo: number;

  @IsOptional()
  @IsNumber()
  costoPrestamo: number;

  @IsOptional()
  @IsNumber()
  costoCompra: number;

  @IsOptional()
  @IsString()
  descripcion: string;

  @IsOptional()
  @IsString()
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
