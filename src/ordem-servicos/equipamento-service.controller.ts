/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Param, Query } from '@nestjs/common';
import { EquipamentoService } from './equipamento-service/equipamento-service.service';
import { EquipamentoDto } from './dto/equipamentoDto';
import { parameterDto } from './dto/parameterDto';

@Controller('Equipamento')
export class EquipamentoServiceController {
  constructor(private readonly equipamentoService: EquipamentoService) {}

  @Post()
  createEquipamento(@Body() equipamentoDto: EquipamentoDto) {
    return this.equipamentoService.createEquipamento(equipamentoDto);
  }
  @Get(':numero/Equipamento/:indice')
  findEquipamentoByValue(@Param('numero') numero: number, @Param('indice') indice: string) {
    return this.equipamentoService.findEquipamentoByIdOrIndice(
      numero,indice
    );
  }
  @Get(':numero')
  findEquipamento(@Param('numero') numero: number){
    return this.equipamentoService.findEquipamento(+numero)
  }
  @Get()
  findEquipamentoByDescricao(@Query('descricao') descricao: string){
    return this.equipamentoService.findEquipamentoByDescricao(descricao)
  }
}
