import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../users/users.model';
import { Product } from './products.model';
import { forwardRef } from '@nestjs/common/utils';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    TypeOrmModule.forFeature([User, Product]),
    forwardRef(() => AuthModule),
  ],
})
export class ProductsModule {}
