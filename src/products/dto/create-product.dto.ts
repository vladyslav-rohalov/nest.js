import { ApiProperty } from '@nestjs/swagger/dist';
import { IsString, IsInt, IsOptional, IsNotEmpty } from 'class-validator';
import { User } from '../../users/users.model';

export class CreateProductDto {
  @ApiProperty({
    example: 'BMW X6',
    description: 'product title, mandatory parameter',
  })
  @IsString({ message: 'Title must be a String' })
  @IsNotEmpty()
  readonly title: string;

  @ApiProperty({
    example: 'Fast SUV and more...',
    description: 'product description, optional parameter',
  })
  @IsOptional()
  @IsString({ message: 'Description must be a String' })
  readonly description: string;

  @ApiProperty({
    example: '50000',
    description: 'product price, mandatory parameter',
  })
  @IsInt({ message: 'Price must be a Number' })
  @IsNotEmpty()
  readonly price: number;

  readonly user: User;
}
