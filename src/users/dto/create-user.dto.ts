import { ApiProperty } from '@nestjs/swagger/dist';
import { IsEmail, IsString, Length } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'useremail@gmail.com', description: 'email' })
  @IsString({ message: 'Must be a String' })
  @IsEmail({}, { message: 'incorrect email' })
  readonly email: string;
  @ApiProperty({ example: '1234567', description: 'user password' })
  @IsString({ message: 'Must be a String' })
  @Length(4, 16, {
    message: 'Password must be no less than 4 and no more 16 symbols',
  })
  readonly password: string;
}
