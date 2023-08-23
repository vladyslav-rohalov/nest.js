import { ApiProperty } from '@nestjs/swagger';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';
import { User } from 'src/users/users.model';

@Entity({ name: 'products' })
export class Product {
  @ApiProperty({ example: '1', description: 'identifier' })
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
