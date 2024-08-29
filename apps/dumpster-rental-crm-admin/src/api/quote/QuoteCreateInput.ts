import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { HaulerWhereUniqueInput } from "../hauler/HaulerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../product/ProductWhereUniqueInput";
import { SalesRepWhereUniqueInput } from "../salesRep/SalesRepWhereUniqueInput";
import { TeamSupportRepWhereUniqueInput } from "../teamSupportRep/TeamSupportRepWhereUniqueInput";

export type QuoteCreateInput = {
  additionalCharges?: number | null;
  amount?: number | null;
  customer?: CustomerWhereUniqueInput | null;
  deliveryDate?: Date | null;
  finalWeight?: number | null;
  hauler?: HaulerWhereUniqueInput | null;
  pickupDate?: Date | null;
  product?: ProductWhereUniqueInput | null;
  salesRep?: SalesRepWhereUniqueInput | null;
  status?: "Option1" | null;
  teamSupportRep?: TeamSupportRepWhereUniqueInput | null;
};
