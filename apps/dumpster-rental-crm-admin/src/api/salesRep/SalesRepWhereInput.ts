import { StringFilter } from "../../util/StringFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { QuoteListRelationFilter } from "../quote/QuoteListRelationFilter";

export type SalesRepWhereInput = {
  id?: StringFilter;
  orders?: OrderListRelationFilter;
  quotes?: QuoteListRelationFilter;
};
