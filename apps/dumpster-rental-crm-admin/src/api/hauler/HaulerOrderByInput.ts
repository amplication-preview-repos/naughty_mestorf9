import { SortOrder } from "../../util/SortOrder";

export type HaulerOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  name?: SortOrder;
  pricing?: SortOrder;
  updatedAt?: SortOrder;
  zipCode?: SortOrder;
};
