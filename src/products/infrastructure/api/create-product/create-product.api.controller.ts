import { createProductUseCase } from "src/products/aplication/create-product-use-case/create-product-use-case";
import { CreateProductApiDto } from "./create-product.api.dto";
import { Body, Controller, Post } from "@nestjs/common";
import { PrimitiveProduct } from "src/products/domain/entity/product.domain.entity";

@Controller('products')
export class CreateProductApiController{
    constructor(private createProductUseCase: createProductUseCase) {}

    @Post()
    async run(@Body() createProductApiDto: CreateProductApiDto): Promise<{product: PrimitiveProduct}> {
        return await this.createProductUseCase.execute(createProductApiDto);
    }
}

