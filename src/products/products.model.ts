import { ApiProperty } from '@nestjs/swagger';
import { Index, Entity, Column, ManyToOne } from 'typeorm';
import {
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from '../users/users.model';

@Entity({ name: 'products' })
export class Product {
  @ApiProperty({ example: '1', description: 'identifier' })
  @Index()
  @PrimaryGeneratedColumn({ name: 'product_id' })
  id: number;

  @ApiProperty({ example: 'BMW X6 ', description: 'product title' })
  @Column()
  title: string;

  @ApiProperty({
    example: 'Fast SUV and blablabla',
    description: 'product description',
  })
  @Column()
  description: string;

  @ApiProperty({ example: '50000', description: 'product price' })
  @Column()
  price: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(() => User, user => user.products)
  @JoinColumn({ name: 'user_id' })
  user: User;
}
