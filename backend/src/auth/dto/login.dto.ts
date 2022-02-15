import { IsString, IsNotEmpty } from 'class-validator';
export class LoginDTO {
  @IsNotEmpty()
  @IsString()
  ci: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
