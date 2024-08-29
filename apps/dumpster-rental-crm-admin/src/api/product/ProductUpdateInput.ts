import { OrderUpdateManyWithoutProductsInput } from "./OrderUpdateManyWithoutProductsInput";
import { QuoteUpdateManyWithoutProductsInput } from "./QuoteUpdateManyWithoutProductsInput";

export type ProductUpdateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderUpdateManyWithoutProductsInput;
  price?: number | null;
  quotes?: QuoteUpdateManyWithoutProductsInput;
  zipCode?: string | null;
};
