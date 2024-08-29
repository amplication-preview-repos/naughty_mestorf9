import { OrderCreateNestedManyWithoutHaulersInput } from "./OrderCreateNestedManyWithoutHaulersInput";
import { QuoteCreateNestedManyWithoutHaulersInput } from "./QuoteCreateNestedManyWithoutHaulersInput";

export type HaulerCreateInput = {
  name?: string | null;
  orders?: OrderCreateNestedManyWithoutHaulersInput;
  pricing?: number | null;
  quotes?: QuoteCreateNestedManyWithoutHaulersInput;
  zipCode?: string | null;
};
