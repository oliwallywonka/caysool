import {
  Body,
  Controller,
  Get,
  Post,
  Req,
  UnauthorizedException,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { LoginDTO } from './dto/login.dto';
import { JwtAuthGuard } from './jwt-auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('login')
  async login(@Body() loginDTO: LoginDTO): Promise<{ token: string }> {
    const { ci, password } = loginDTO;
    const valid = await this.authService.validateUser(ci, password);
    if (!valid) {
      throw new UnauthorizedException();
    }
    return await this.authService.generateAccessToken(ci);
  }

  @UseGuards(JwtAuthGuard)
  @Get('refresh')
  async refresh(@Req() req): Promise<{ token: string }> {
    return await this.authService.generateAccessToken(req.user.ci);
  }
}
