import { Customer } from "../customer/Customer";
import { Hauler } from "../hauler/Hauler";
import { Product } from "../product/Product";
import { SalesRep } from "../salesRep/SalesRep";
import { TeamSupportRep } from "../teamSupportRep/TeamSupportRep";

export type Quote = {
  additionalCharges: number | null;
  amount: number | null;
  createdAt: Date;
  customer?: Customer | null;
  deliveryDate: Date | null;
  finalWeight: number | null;
  hauler?: Hauler | null;
  id: string;
  pickupDate: Date | null;
  product?: Product | null;
  salesRep?: SalesRep | null;
  status?: "Option1" | null;
  teamSupportRep?: TeamSupportRep | null;
  updatedAt: Date;
};
