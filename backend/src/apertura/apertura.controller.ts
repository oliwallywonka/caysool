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
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AperturaService } from './apertura.service';
import { CreateAperturaDto } from './dto/create-apertura.dto';
import { UpdateAperturaDto } from './dto/update-apertura.dto';

@Controller('apertura')
export class AperturaController {
  constructor(private readonly aperturaService: AperturaService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createAperturaDto: CreateAperturaDto) {
    return this.aperturaService.create(createAperturaDto, req.user);
  }

  @Get()
  findAll(
    @Query('page', new DefaultValuePipe(1), ParseIntPipe) page = 1,
    @Query('limit', new DefaultValuePipe(2), ParseIntPipe) limit = 20,
  ) {
    return this.aperturaService.findAll({ page, limit });
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.aperturaService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateAperturaDto: UpdateAperturaDto,
  ) {
    return this.aperturaService.update(+id, updateAperturaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.aperturaService.remove(+id);
  }
}
