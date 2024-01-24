import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Entity } from "../../core/entities/entities";

enum SizeEnum {
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
}

interface ProductProps {
  name: string;
  price: number;
  description: string;
  size: SizeEnum;
  image?: string;
}
export class Product extends Entity<ProductProps> {
  private constructor(props: ProductProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get name() {
    return this.props.name;
  }
  get price() {
    return this.props.price;
  }
  get description() {
    return this.props.description;
  }
  get size() {
    return this.props.size;
  }
  get image() {
    return this.props.image;
  }

  set price(price: number) {
    this.props.price = price;
  }

  static create(props: ProductProps, id?: UniqueEntityID) {
    const sale = new Product(props, id);

    return sale;
  }
}
