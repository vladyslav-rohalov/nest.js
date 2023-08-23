import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString, IsInt } from 'class-validator';
import { User } from 'src/users/users.model';

export class CreateProductDto {
  @ApiProperty({ example: 'BMW X6', description: 'product title' })
  @IsString({ message: 'Must be a String' })
  readonly title: string;

  @ApiProperty({
    example: 'Fast SUV and blablabla',
    description: 'product description',
  })
  @IsString({ message: 'Must be a String' })
  readonly description: string;

  @ApiProperty({ example: '50000', description: 'product price' })
  @IsInt({ message: 'Must be a Number' })
  readonly price: number;

  readonly user: User;
}
