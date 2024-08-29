import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { HaulerWhereUniqueInput } from "../hauler/HaulerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SalesRepWhereUniqueInput } from "../salesRep/SalesRepWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderWhereInput = {
  customer?: CustomerWhereUniqueInput;
  hauler?: HaulerWhereUniqueInput;
  id?: StringFilter;
  product?: ProductWhereUniqueInput;
  salesRep?: SalesRepWhereUniqueInput;
  user?: UserWhereUniqueInput;
};
