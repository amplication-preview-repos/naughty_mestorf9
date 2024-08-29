import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { QuoteListRelationFilter } from "../quote/QuoteListRelationFilter";

export type HaulerWhereInput = {
  id?: StringFilter;
  name?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  pricing?: FloatNullableFilter;
  quotes?: QuoteListRelationFilter;
  zipCode?: StringNullableFilter;
};
