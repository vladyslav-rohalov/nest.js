import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from './products.model';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private productsRepository: Repository<Product>
  ) {}

  async createProduct(dto: CreateProductDto): Promise<Product> {
    const product = await this.productsRepository.save(dto);
    return product;
  }

  async getAllProducts(): Promise<Product[]> {
    const products = await this.productsRepository.find();
    return products;
  }
}

// @Injectable()
// export class PostsService {
//   constructor(@InjectModel(Post) private postRepository: typeof Post) {}

//   async create(dto: CreatePostDto) {
//     const post = await this.postRepository.create({ ...dto });
//     return post;
//   }
// }
