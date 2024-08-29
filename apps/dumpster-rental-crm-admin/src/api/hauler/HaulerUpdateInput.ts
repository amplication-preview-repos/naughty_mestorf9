import { OrderUpdateManyWithoutHaulersInput } from "./OrderUpdateManyWithoutHaulersInput";
import { QuoteUpdateManyWithoutHaulersInput } from "./QuoteUpdateManyWithoutHaulersInput";

export type HaulerUpdateInput = {
  name?: string | null;
  orders?: OrderUpdateManyWithoutHaulersInput;
  pricing?: number | null;
  quotes?: QuoteUpdateManyWithoutHaulersInput;
  zipCode?: string | null;
};
