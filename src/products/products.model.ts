import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { User } from 'src/users/users.model';

@Entity({ name: 'products' })
export class Product {
  @ApiProperty({ example: '1', description: 'identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'BMW X6', description: 'product name' })
  @Column()
  name: string;

  @ApiProperty({ example: 'BMW X6 M Line ', description: 'product title' })
  @Column()
  content: string;

  @ApiProperty({
    example: 'Fast SUV and blablabla',
    description: 'product description',
  })
  @Column()
  description: string;

  @ApiProperty({ example: '50000', description: 'product price' })
  @Column()
  price: number;

  @ManyToOne(() => User)
  @Column()
  userId: number;
}
