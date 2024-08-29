import { StringFilter } from "../../util/StringFilter";
import { QuoteListRelationFilter } from "../quote/QuoteListRelationFilter";

export type TeamSupportRepWhereInput = {
  id?: StringFilter;
  quotes?: QuoteListRelationFilter;
};
