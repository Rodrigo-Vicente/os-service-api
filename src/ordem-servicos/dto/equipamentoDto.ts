import { ApiProperty } from '@nestjs/swagger';

export class EquipamentoDto {
  @ApiProperty()
  numeroOS: number;
  @ApiProperty()
  indice: string;
  @ApiProperty()
  Descricao: string;
  @ApiProperty()
  Problema: string;
}
