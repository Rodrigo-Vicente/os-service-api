/* eslint-disable prettier/prettier */
import { ApiProperty } from '@nestjs/swagger';
export class parameterDto {
  @ApiProperty()
  numero: number;
  @ApiProperty()
  indice: string;
}
