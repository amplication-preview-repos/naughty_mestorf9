import { Customer } from "../customer/Customer";
import { Hauler } from "../hauler/Hauler";
import { Product } from "../product/Product";
import { SalesRep } from "../salesRep/SalesRep";
import { User } from "../user/User";

export type Order = {
  createdAt: Date;
  customer?: Customer | null;
  hauler?: Hauler | null;
  id: string;
  product?: Product | null;
  salesRep?: SalesRep | null;
  updatedAt: Date;
  user?: User | null;
};
