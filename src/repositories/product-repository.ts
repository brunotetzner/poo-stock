import { Product } from "../domain/entities/product";

export interface ProductRepository {
  create(Product: Product): Promise<void>;
}
