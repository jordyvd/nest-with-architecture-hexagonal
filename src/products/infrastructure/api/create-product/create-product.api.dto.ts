import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class CreateProductApiDto {
    @IsString()
    @IsNotEmpty()
    name!: string;

    @IsNumber()
    amount: number;
    
    @IsString()
    customerId: string;
}