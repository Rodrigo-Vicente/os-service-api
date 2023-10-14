import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { OrdermServicosService } from './orderm-servicos.service';
import { CreateOrdermServicoDto } from './dto/create-orderm-servico.dto';

@Controller('orderm-servicos')
export class OrdermServicosController {
  constructor(private readonly ordermServicosService: OrdermServicosService) {}

  @Post()
  create(@Body() createOrdermServicoDto: CreateOrdermServicoDto) {
    return this.ordermServicosService.create(createOrdermServicoDto);
  }

  @Get()
  findAll() {
    return this.ordermServicosService.findAll();
  }

  @Get(':numero')
  findOne(@Param('numero') numero: number) {
    return this.ordermServicosService.findOne(+numero);
  }
}
