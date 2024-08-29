import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { HaulerWhereUniqueInput } from "../hauler/HaulerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SalesRepWhereUniqueInput } from "../salesRep/SalesRepWhereUniqueInput";
import { TeamSupportRepWhereUniqueInput } from "../teamSupportRep/TeamSupportRepWhereUniqueInput";

export type QuoteWhereInput = {
  additionalCharges?: FloatNullableFilter;
  amount?: FloatNullableFilter;
  customer?: CustomerWhereUniqueInput;
  deliveryDate?: DateTimeNullableFilter;
  finalWeight?: FloatNullableFilter;
  hauler?: HaulerWhereUniqueInput;
  id?: StringFilter;
  pickupDate?: DateTimeNullableFilter;
  product?: ProductWhereUniqueInput;
  salesRep?: SalesRepWhereUniqueInput;
  status?: "Option1";
  teamSupportRep?: TeamSupportRepWhereUniqueInput;
};
