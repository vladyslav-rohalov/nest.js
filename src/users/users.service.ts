import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './users.model';
import { CreateUserDto } from './dto/create-user.dto';
// import { HttpException } from '@nestjs/common/exceptions';
// import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User) private usersRepository: Repository<User>
  ) {}

  async createUser(dto: CreateUserDto): Promise<User> {
    const user = await this.usersRepository.save(dto);
    return user;
  }

  async getAllUsers(): Promise<User[]> {
    const users = await this.usersRepository.find();
    return users;
  }

  async getUserByID(id: number): Promise<User | null> {
    const user = await this.usersRepository.findOneBy({ id });
    return user;
  }

  async getUserByEmail(email: string) {
    const user = await this.usersRepository.findOneBy({ email });
    return user;
  }
}
