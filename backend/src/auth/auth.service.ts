import { BadRequestException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
import { JwtStrategy } from './jwt.strategy';

interface JWTPayload {
  id: number;
}

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
    private jwtStrategy: JwtStrategy,
  ) {}

  async validateUser(ci: string, password: string): Promise<boolean> {
    const user = await this.userService.findUserByCi(ci);
    if (!user)
      throw new BadRequestException({ message: 'Usuario no encontrado' });
    return await user.validatePassword(password);
  }

  async generateAccessToken(ci: string) {
    const user = await this.userService.findUserByCi(ci);
    const payload: JWTPayload = { id: user.id };
    return {
      token: this.jwtService.sign(payload),
      status: 200,
      user: user,
    };
  }
}
