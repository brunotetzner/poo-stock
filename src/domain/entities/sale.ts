import { UniqueEntityID } from "@/core/entities/unique-entity-id";
import { Entity } from "../../core/entities/entities";
import { Optional } from "@/core/types/optional";

interface SaleProps {
  productId: UniqueEntityID;
  productQuantity: number;
  createdAt: Date;
}
export class Sale extends Entity<SaleProps> {
  private constructor(props: SaleProps, id?: UniqueEntityID) {
    super(props, id);
  }

  static create(props: Optional<SaleProps, "createdAt">, id?: UniqueEntityID) {
    const sale = new Sale(
      {
        ...props,
        createdAt: new Date(),
      },
      id
    );

    return sale;
  }
}
