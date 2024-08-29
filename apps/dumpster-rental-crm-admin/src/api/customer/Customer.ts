import { Order } from "../order/Order";
import { Quote } from "../quote/Quote";

export type Customer = {
  address: string | null;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  orders?: Array<Order>;
  phone: string | null;
  quotes?: Array<Quote>;
  updatedAt: Date;
};
