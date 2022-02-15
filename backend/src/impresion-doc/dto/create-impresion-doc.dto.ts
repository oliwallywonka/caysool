import { IsInt, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Prestamo } from 'src/prestamo/entities/prestamo.entity';

export class CreateImpresionDocDto {
  @IsNotEmpty({ message: 'El campo nombre no puede ir vacio' })
  @IsInt()
  prestamo: Prestamo;

  @IsNotEmpty()
  @IsString()
  tipoDocumento: string;

  @IsNotEmpty()
  @IsNumber()
  costoImpresion: number;
}
