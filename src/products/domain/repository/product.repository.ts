import { Product } from "../entity/product.domain.entity";

export abstract class ProductRepository {
   abstract create(product: Product): Promise<void>;
   abstract findById(id: string): Promise<Product | null>;
}