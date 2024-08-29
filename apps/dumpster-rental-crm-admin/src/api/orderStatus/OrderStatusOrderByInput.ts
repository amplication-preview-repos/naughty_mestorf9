import { SortOrder } from "../../util/SortOrder";

export type OrderStatusOrderByInput = {
  coreStatus?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  subStatus?: SortOrder;
  updatedAt?: SortOrder;
};
