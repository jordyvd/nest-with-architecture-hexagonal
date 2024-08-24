import { ProductRepository } from "src/products/domain/repository/product.repository";
import { createProductUseCaseDto } from "./create-product-use-case.dto";
import { PrimitiveProduct, Product } from "src/products/domain/entity/product.domain.entity";
import { Injectable } from "@nestjs/common";

@Injectable()
export class createProductUseCase {
    constructor(private readonly productRepository: ProductRepository) {}

    async execute(dto: createProductUseCaseDto): Promise<{product: PrimitiveProduct}> {
        const product = Product.create(dto);
        
        await this.productRepository.create(product);
        
        return {
            product: product.toValue()
        };
    } 
} 