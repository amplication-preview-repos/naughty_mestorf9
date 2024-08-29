import { OrderCreateNestedManyWithoutProductsInput } from "./OrderCreateNestedManyWithoutProductsInput";
import { QuoteCreateNestedManyWithoutProductsInput } from "./QuoteCreateNestedManyWithoutProductsInput";

export type ProductCreateInput = {
  description?: string | null;
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutProductsInput;
  price?: number | null;
  quotes?: QuoteCreateNestedManyWithoutProductsInput;
  zipCode?: string | null;
};
