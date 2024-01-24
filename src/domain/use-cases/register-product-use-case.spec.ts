import { expect, test } from "vitest";
import { RegisterProductUseCase } from "./register-product-use-case";
import { Product } from "@/domain/entities/product";
import { ProductRepository } from "@/repositories/product-repository";
import { SizeEnum } from "@/dtos/enumerators";

const fakeProductRepository: ProductRepository = {
  create: async (product: Product) => {
    return;
  },
};

test("Create a Product", async () => {
  const ProductQuestion = new RegisterProductUseCase(fakeProductRepository);
  const product = await ProductQuestion.execute({
    name: "any name",
    price: 12,
    description: " any description",
    size: SizeEnum.S,
    image: " any image",
  });

  expect(product.name).toEqual("any name");
});
