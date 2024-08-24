import { v4 as uuidv4 } from 'uuid';

export interface PrimitiveProduct {
    id: string;
    amount: number;
    name: string;
    customerId: string;
}

export class Product {
    constructor(private attributes: PrimitiveProduct) {
       
    }

    static create(createProduct: {
        amount: number;
        name: string;
        customerId: string;
    }): Product {
        return new Product({
            id: uuidv4(),
            ...createProduct
        });
    };

    toValue(): PrimitiveProduct {
        return this.attributes;
    }
}