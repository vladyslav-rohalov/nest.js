import { ApiProperty } from '@nestjs/swagger';
import { Index, Entity, Column, OneToMany } from 'typeorm';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Product } from '../products/products.model';

@Entity({ name: 'users' })
export class User {
  @ApiProperty({ example: '1', description: 'identifier' })
  @PrimaryGeneratedColumn({ name: 'user_id' })
  id: number;

  @ApiProperty({ example: 'useremail@gmail.com', description: 'email' })
  @Index()
  @Column()
  email: string;

  @ApiProperty({ example: '1234567', description: 'user password' })
  @Column()
  password: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @OneToMany(() => Product, product => product, { onDelete: 'CASCADE' })
  products: Product[];
}
