import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";
import { QuoteUpdateManyWithoutCustomersInput } from "./QuoteUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  address?: string | null;
  email?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
  phone?: string | null;
  quotes?: QuoteUpdateManyWithoutCustomersInput;
};
