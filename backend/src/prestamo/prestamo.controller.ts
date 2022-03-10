import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
  Query,
  DefaultValuePipe,
  ParseIntPipe,
  UseInterceptors,
  ClassSerializerInterceptor,
} from '@nestjs/common';
import { PrestamoService } from './prestamo.service';
import { CreatePrestamoDto } from './dto/create-prestamo.dto';
import { UpdatePrestamoDto } from './dto/update-prestamo.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/prestamo')
export class PrestamoController {
  constructor(private readonly prestamoService: PrestamoService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createPrestamoDto: CreatePrestamoDto) {
    return this.prestamoService.create(createPrestamoDto, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('clientCi') clientCi = '',
    @Query('estadoPrestamo') estadoPrestamo = '',
  ) {
    return this.prestamoService.findAll(
      { page, limit },
      clientCi,
      estadoPrestamo,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.prestamoService.findOne(+id);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Req() req: any,
    @Param('id') id: string,
    @Body() updatePrestamoDto: UpdatePrestamoDto,
  ) {
    return this.prestamoService.update(+id, updatePrestamoDto, req.user);
  }

  @Get('client/:clientId')
  findPrestamoByClient(@Param('clientId') clientId: string) {
    return this.prestamoService.getPrestamosByClientId(+clientId);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.prestamoService.remove(+id);
  }
}
