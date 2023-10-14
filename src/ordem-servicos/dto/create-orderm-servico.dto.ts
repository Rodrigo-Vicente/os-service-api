import { ApiProperty } from '@nestjs/swagger';

export class CreateOrdermServicoDto {
  @ApiProperty()
  numero: number;
  @ApiProperty()
  Descricao: string;
}
