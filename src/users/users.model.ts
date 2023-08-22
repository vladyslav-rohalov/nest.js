import { ApiProperty } from '@nestjs/swagger';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { Product } from 'src/products/products.model';

@Entity({ name: 'users' })
export class User {
  @ApiProperty({ example: '1', description: 'identifier' })
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'useremail@gmail.com', description: 'email' })
  @Column()
  email: string;

  @ApiProperty({ example: '1234567', description: 'user password' })
  @Column()
  password: string;

  @OneToMany(() => Product, product => product)
  products: Product[];
}
