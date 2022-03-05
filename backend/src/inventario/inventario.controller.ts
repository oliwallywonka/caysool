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
} from '@nestjs/common';
import { InventarioService } from './inventario.service';
import { CreateInventarioDto } from './dto/create-inventario.dto';
import { UpdateInventarioDto } from './dto/update-inventario.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/inventario')
export class InventarioController {
  constructor(private readonly inventarioService: InventarioService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createInventarioDto: CreateInventarioDto) {
    return this.inventarioService.create(createInventarioDto, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
    @Query('clientCi') clientCi = '',
    @Query('estadoInv') estadoInv = 'EMPENADO',
  ) {
    return this.inventarioService.findAll({ page, limit }, clientCi, estadoInv);
  }

  @UseGuards(JwtAuthGuard)
  @Get('comprado')
  findCompradoAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit = 10,
  ) {
    return this.inventarioService.findComprado({ page, limit });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.inventarioService.findOne(+id);
  }

  @Get('client/:clientId')
  getByClient(@Param('clientId') clientId: string) {
    return this.inventarioService.getByClientId(+clientId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Req() req,
    @Param('id') id: string,
    @Body() updateInventarioDto: UpdateInventarioDto,
  ) {
    return this.inventarioService.update(+id, updateInventarioDto, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.inventarioService.remove(+id);
  }
}
