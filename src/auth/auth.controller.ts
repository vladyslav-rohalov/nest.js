import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { CreateUserDto } from 'src/users/dto/create-user.dto';
import { AuthService } from './auth.service';
import { User } from 'src/users/users.model';

@ApiTags('Authoriztion')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}
  //need to add response type to swagger
  @ApiOperation({ summary: 'Login' })
  @ApiResponse({ status: 200, description: 'user token' })
  @Post('login')
  login(@Body() userDto: CreateUserDto) {
    return this.authService.login(userDto);
  }

  @ApiOperation({ summary: 'Registration' })
  @ApiResponse({ status: 201, description: 'user email & token' })
  @Post('registration')
  registration(@Body() userDto: CreateUserDto) {
    return this.authService.registration(userDto);
  }
}
