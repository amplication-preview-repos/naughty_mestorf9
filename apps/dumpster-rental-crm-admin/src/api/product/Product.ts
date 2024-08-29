import { Order } from "../order/Order";
import { Quote } from "../quote/Quote";

export type Product = {
  createdAt: Date;
  description: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  price: number | null;
  quotes?: Array<Quote>;
  updatedAt: Date;
  zipCode: string | null;
};
