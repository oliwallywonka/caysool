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
} from '@nestjs/common';
import { ImpresionDocService } from './impresion-doc.service';
import { CreateImpresionDocDto } from './dto/create-impresion-doc.dto';
import { UpdateImpresionDocDto } from './dto/update-impresion-doc.dto';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';

@Controller('api/impresion-doc')
export class ImpresionDocController {
  constructor(private readonly impresionDocService: ImpresionDocService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Req() req, @Body() createImpresionDocDto: CreateImpresionDocDto) {
    return this.impresionDocService.create(createImpresionDocDto, req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('prestamo/:prestamoId')
  findAll(@Param('prestamoId') prestamoId: string) {
    return this.impresionDocService.findImpresionById(+prestamoId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch(':id')
  update(
    @Req() req,
    @Param('id') id: string,
    @Body() updateImpresionDocDto: UpdateImpresionDocDto,
  ) {
    return this.impresionDocService.update(
      +id,
      updateImpresionDocDto,
      req.user,
    );
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  remove(@Req() req, @Param('id') id: string) {
    return this.impresionDocService.remove(+id, req.user);
  }
}
