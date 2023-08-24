import { Injectable } from '@nestjs/common/decorators';
import { CanActivate } from '@nestjs/common';
import { ExecutionContext } from '@nestjs/common';
import { ProductsService } from '../products/products.service';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class OwnerQuard implements CanActivate {
  constructor(private productsService: ProductsService) {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const req = context.switchToHttp().getRequest();

    const user = req.user;
    const { id } = req.params;

    const product = await this.productsService.getProduct(id);

    if (product && user && product.user.id === user.id) return true;

    throw new HttpException('Something was wrong...', HttpStatus.NOT_FOUND);
  }
}
