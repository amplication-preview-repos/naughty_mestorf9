import { OrderCreateNestedManyWithoutSalesRepsInput } from "./OrderCreateNestedManyWithoutSalesRepsInput";
import { QuoteCreateNestedManyWithoutSalesRepsInput } from "./QuoteCreateNestedManyWithoutSalesRepsInput";

export type SalesRepCreateInput = {
  orders?: OrderCreateNestedManyWithoutSalesRepsInput;
  quotes?: QuoteCreateNestedManyWithoutSalesRepsInput;
};
