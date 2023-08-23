import { Body, Controller, Param, UseGuards, Req } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Post, Get, Patch, Delete } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Product } from './products.model';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { OwnerQuard } from 'src/quard/owner.quard';

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({ status: 201, type: [Product] })
  @UseGuards(JwtAuthGuard)
  @Post()
  // Need to add Req type
  create(@Body() productDto: CreateProductDto, @Req() req) {
    return this.productsService.createProduct(productDto, req.user.id);
  }

  @ApiOperation({ summary: 'Get all User prdoucts' })
  @ApiResponse({ status: 200, type: [Product] })
  @UseGuards(JwtAuthGuard)
  @Get()
  // Need to add Req type
  findAll(@Req() req) {
    return this.productsService.getAllProducts(req.user.id);
  }

  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ status: 200, type: [Product] })
  @UseGuards(JwtAuthGuard, OwnerQuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.getProductByID(+id);
  }

  @ApiOperation({ summary: 'Update product by id' })
  @ApiResponse({ status: 204, type: [Product] })
  @UseGuards(JwtAuthGuard, OwnerQuard)
  @Patch(':id')
  updateOne(@Param('id') id: string, @Body() productDto: CreateProductDto) {
    return this.productsService.updateProductByID(+id, productDto);
  }

  @ApiOperation({ summary: 'Update product by id' })
  @ApiResponse({ status: 204, type: [Product] })
  @UseGuards(JwtAuthGuard, OwnerQuard)
  @Delete(':id')
  removeOne(@Param('id') id: string) {
    return this.productsService.removeProductByID(+id);
  }
}
