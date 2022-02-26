import { Controller, Get, Query } from '@nestjs/common';
import { ImpresionDocService } from 'src/impresion-doc/impresion-doc.service';
import { InventarioService } from 'src/inventario/inventario.service';
import { PagoService } from 'src/pago/pago.service';
import { PrestamoService } from 'src/prestamo/prestamo.service';
import { TransaccionMonedaService } from 'src/transaccion-moneda/transaccion-moneda.service';
import moment = require('moment');

@Controller('api/reporte')
export class ReporteController {
  constructor(
    private readonly prestamoService: PrestamoService,
    private readonly pagoService: PagoService,
    private readonly impresionService: ImpresionDocService,
    private readonly inventarioService: InventarioService,
    private readonly transaccionService: TransaccionMonedaService,
  ) {}

  @Get('prestamo')
  findPrestamoByDate(@Query('from') from = '', @Query('to') to = '') {
    from = moment(from).startOf('day').format('YYYY-MM-DD HH:mm:ss');
    to = moment(to).endOf('day').format('YYYY-MM-DD HH:mm:ss');
    return this.prestamoService.getPrestamosByDate({ from, to });
  }

  @Get('pago')
  findPagoByDate(@Query('from') from = '', @Query('to') to = '') {
    from = moment(from).startOf('day').format('YYYY-MM-DD HH:mm:ss');
    to = moment(to).endOf('day').format('YYYY-MM-DD HH:mm:ss');
    return this.pagoService.getPagosByDate({ from, to });
  }

  @Get('impresion')
  findImpresionByDate(@Query('from') from = '', @Query('to') to = '') {
    from = moment(from).startOf('day').format('YYYY-MM-DD HH:mm:ss');
    to = moment(to).endOf('day').format('YYYY-MM-DD HH:mm:ss');
    return this.impresionService.getImpresionesByDate({ from, to });
  }

  @Get('inventario')
  findInventarioByDate(@Query('from') from = '', @Query('to') to = '') {
    from = moment(from).startOf('day').format('YYYY-MM-DD HH:mm:ss');
    to = moment(to).endOf('day').format('YYYY-MM-DD HH:mm:ss');
    return this.inventarioService.getInventarioByDate({ from, to });
  }

  @Get('transaccion')
  findTransaccionByDate(@Query('from') from = '', @Query('to') to = '') {
    from = moment(from).startOf('day').format('YYYY-MM-DD HH:mm:ss');
    to = moment(to).endOf('day').format('YYYY-MM-DD HH:mm:ss');
    return this.transaccionService.getTransaccionesByDate({ from, to });
  }
}
