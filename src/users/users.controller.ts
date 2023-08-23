import { Controller, Body, Post, Get, UseGuards } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { JwtAuthGuard } from 'src/guard/jwt-auth.guard';

// delete from swagger
@ApiTags('Users')
@Controller()
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: 'Create user' })
  @ApiResponse({ status: 201, type: User })
  @Post()
  create(@Body() userDto: CreateUserDto) {
    return this.usersService.createUser(userDto);
  }

  @ApiOperation({ summary: 'Get User by email' })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(JwtAuthGuard)
  @Get()
  findOne() {
    return this.usersService.getUserByEmail;
  }

  // //delete after testing
  // @ApiOperation({ summary: 'Get all users' })
  // @ApiResponse({ status: 200, type: [User] })
  // @UseGuards(JwtAuthGuard)
  // @Get()
  // findAll() {
  //   return this.usersService.getAllUsers();
  // }

  // //delete after testing
  // @ApiOperation({ summary: 'Get User by id' })
  // @ApiResponse({ status: 200, type: [User] })
  // @UseGuards(JwtAuthGuard)
  // @Get()
  // findOneByID() {
  //   return this.usersService.getUserByID;
  // }
}
