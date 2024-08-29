import { Order } from "../order/Order";
import { Quote } from "../quote/Quote";

export type SalesRep = {
  createdAt: Date;
  id: string;
  orders?: Array<Order>;
  quotes?: Array<Quote>;
  updatedAt: Date;
};
