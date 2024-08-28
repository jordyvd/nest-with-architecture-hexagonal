import { Module } from '@nestjs/common';
import { CreateProductApiController } from './infrastructure/api/create-product/create-product.api.controller';
import { createProductUseCase } from './aplication/create-product-use-case/create-product-use-case';
import { InMemoryProductRepository } from './infrastructure/repositories/in-memory.product-repository';
import { ProductRepository } from './domain/repository/product.repository';
@Module({
  controllers: [CreateProductApiController],
  providers: [
    createProductUseCase,
    InMemoryProductRepository,
    {
      provide: ProductRepository,
      useClass: InMemoryProductRepository,
    }
  ],
})
export class ProductsModule {}
