import { SalesRepWhereInput } from "./SalesRepWhereInput";
import { SalesRepOrderByInput } from "./SalesRepOrderByInput";

export type SalesRepFindManyArgs = {
  where?: SalesRepWhereInput;
  orderBy?: Array<SalesRepOrderByInput>;
  skip?: number;
  take?: number;
};
