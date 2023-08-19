import { ApiProperty } from '@nestjs/swagger/dist';

export class CreateUserDto {
  @ApiProperty({ example: 'useremail@gmail.com', description: 'email' })
  readonly email: string;
  @ApiProperty({ example: '1234567', description: 'user password' })
  readonly password: string;
}
