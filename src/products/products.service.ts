import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.model';
import { HttpException } from '@nestjs/common/exceptions';
import { HttpStatus } from '@nestjs/common/enums';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productRepository: Repository<Product>
  ) {}

  async createProduct(dto: CreateProductDto, id: number): Promise<Product> {
    const isExist = await this.productRepository.findBy({
      user: { id },
      title: dto.title,
    });
    if (isExist.length) {
      throw new HttpException(
        'This products alredy exist',
        HttpStatus.CONFLICT
      );
    }
    const product = { ...dto, user: { id } };

    return await this.productRepository.save(product);
  }

  async getAllProducts(id: number): Promise<Product[]> {
    const products = await this.productRepository.find({
      where: { user: { id } },
    });
    return products;
  }

  async getProductByID(id: number): Promise<Product | null> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: { user: true },
    });

    return product;
  }

  async updateProductByID(id: number, productDto: CreateProductDto) {
    return await this.productRepository.update(id, productDto);
  }

  async removeProductByID(id: number) {
    return await this.productRepository.delete(id);
  }
}
