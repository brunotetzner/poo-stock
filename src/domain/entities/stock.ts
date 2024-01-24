import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Entity } from "../../core/entities/entities";

interface StockProps {
  productId: UniqueEntityID;
  quantity: number;
  minQuantity: number;
}
export class Stock extends Entity<StockProps> {
  private constructor(props: StockProps, id?: UniqueEntityID) {
    super(props, id);
  }

  get quantity() {
    return this.props.quantity;
  }
  get minQuantity() {
    return this.props.quantity;
  }

  set quantity(quantity: number) {
    this.props.quantity = quantity;
  }
  set minQuantity(minQuantity: number) {
    this.props.minQuantity = minQuantity;
  }

  static create(props: StockProps, id?: UniqueEntityID) {
    const stock = new Stock(props, id);

    return stock;
  }
}
