import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { ProductRepository } from "@/repositories/product-repository";
import { Product } from "../entities/product";
import { SizeEnum } from "@/dtos/enumerators";

interface ProductQuestionUseCaseRequest {
  name: string;
  price: number;
  description: string;
  size: SizeEnum;
  image?: string;
}

export class RegisterProductUseCase {
  constructor(private ProductRepository: ProductRepository) {}
  async execute({
    name,
    price,
    description,
    size,
    image,
  }: ProductQuestionUseCaseRequest) {
    const product = Product.create({
      name,
      price,
      description,
      size,
      image,
    });

    await this.ProductRepository.create(product);
    return product;
  }
}
