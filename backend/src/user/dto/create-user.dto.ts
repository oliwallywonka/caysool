import { IsBoolean, IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class CreateUserDto {
  @IsNotEmpty({ message: 'El campo nombre no puede ir vacio' })
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsBoolean()
  rol: boolean;

  @IsNotEmpty()
  @IsString()
  ci: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  phone: string;

  @IsString()
  @IsOptional()
  picture?: string;

  @IsOptional()
  @IsBoolean()
  isActive?: boolean;
}
