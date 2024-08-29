import { OrderUpdateManyWithoutSalesRepsInput } from "./OrderUpdateManyWithoutSalesRepsInput";
import { QuoteUpdateManyWithoutSalesRepsInput } from "./QuoteUpdateManyWithoutSalesRepsInput";

export type SalesRepUpdateInput = {
  orders?: OrderUpdateManyWithoutSalesRepsInput;
  quotes?: QuoteUpdateManyWithoutSalesRepsInput;
};
