import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { HaulerWhereUniqueInput } from "../hauler/HaulerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SalesRepWhereUniqueInput } from "../salesRep/SalesRepWhereUniqueInput";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type OrderUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  hauler?: HaulerWhereUniqueInput | null;
  product?: ProductWhereUniqueInput | null;
  salesRep?: SalesRepWhereUniqueInput | null;
  user?: UserWhereUniqueInput | null;
};
