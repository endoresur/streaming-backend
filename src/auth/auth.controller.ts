import { Body, Controller, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('login')
  @ApiBody({ type: CreateUserDto })
  async login(@Request() req) {
    return req.user;
  }

  @Post('/register')
  register(@Body() dto: CreateUserDto) {
    // dto.registrationDate = Date.now() as Date;
    return this.authService.register(dto);
  }
}