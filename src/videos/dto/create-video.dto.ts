import { ApiProperty } from '@nestjs/swagger';

export class CreateVideoDto {
  @ApiProperty()
  title: string;

  @ApiProperty()
  description: string;
}
