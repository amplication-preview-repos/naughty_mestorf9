import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  createdAt?: SortOrder;
  customerId?: SortOrder;
  haulerId?: SortOrder;
  id?: SortOrder;
  productId?: SortOrder;
  salesRepId?: SortOrder;
  updatedAt?: SortOrder;
  userId?: SortOrder;
};
