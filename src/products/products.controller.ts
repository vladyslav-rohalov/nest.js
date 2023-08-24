import { Body, Controller, Param, UseGuards, Req } from '@nestjs/common';
import { Post, Get, Patch, Delete, Res, HttpCode } from '@nestjs/common';
import { Response, Request } from 'express';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProductDto } from './dto/create-product.dto';
import { ProductsService } from './products.service';
import { JwtAuthGuard } from '../guard/jwt-auth.guard';
import { OwnerQuard } from '../guard/owner.quard';
import { ResSuccess, ResCreated, ResUpdated } from './responses.example';

interface IRequest extends Request {
  user: { id: number };
}

@ApiTags('Products')
@Controller('products')
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @ApiOperation({ summary: 'Create product' })
  @ApiResponse({ status: 201, type: ResCreated })
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() productDto: CreateProductDto, @Req() req: IRequest) {
    return this.productsService.createProduct(productDto, req.user.id);
  }

  @ApiOperation({ summary: 'Get all User prdoucts' })
  @ApiResponse({ status: 200, type: [ResSuccess] })
  @UseGuards(JwtAuthGuard)
  @Get()
  findAll(@Req() req: IRequest) {
    return this.productsService.getAllProducts(req.user.id);
  }

  @ApiOperation({ summary: 'Get product by id' })
  @ApiResponse({ status: 200, type: [ResSuccess] })
  @UseGuards(JwtAuthGuard, OwnerQuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productsService.getProductByID(+id);
  }

  @ApiOperation({ summary: 'Update product by id' })
  @ApiResponse({ status: 200, type: ResUpdated })
  @UseGuards(JwtAuthGuard, OwnerQuard)
  @Patch(':id')
  updateOne(
    @Param('id') id: string,
    @Body() productDto: CreateProductDto,
    @Res() res: Response
  ) {
    res.json({ message: 'Product has been successfully updated' });
    return this.productsService.updateProductByID(+id, productDto);
  }

  @ApiOperation({ summary: 'Update product by id' })
  @ApiResponse({ status: 204, description: 'No content' })
  @UseGuards(JwtAuthGuard, OwnerQuard)
  @HttpCode(204)
  @Delete(':id')
  removeOne(@Param('id') id: string) {
    return this.productsService.removeProductByID(+id);
  }
}
