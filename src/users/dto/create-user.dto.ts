import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  userName: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  login: string;

  @ApiProperty()
  password: string;

  slug: string;
}
