import { PrimitiveProduct, Product } from "src/products/domain/entity/product.domain.entity";

 export class InMemoryProductRepository {
    private products: PrimitiveProduct[] = [];

    async create(product: Product): Promise<void> {
        this.products.push(product.toValue());
    }
 }