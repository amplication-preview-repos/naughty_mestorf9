import { Order } from "../order/Order";
import { Quote } from "../quote/Quote";

export type Hauler = {
  createdAt: Date;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  pricing: number | null;
  quotes?: Array<Quote>;
  updatedAt: Date;
  zipCode: string | null;
};
