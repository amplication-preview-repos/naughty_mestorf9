import { SortOrder } from "../../util/SortOrder";

export type QuoteOrderByInput = {
  additionalCharges?: SortOrder;
  amount?: SortOrder;
  createdAt?: SortOrder;
  customerId?: SortOrder;
  deliveryDate?: SortOrder;
  finalWeight?: SortOrder;
  haulerId?: SortOrder;
  id?: SortOrder;
  pickupDate?: SortOrder;
  productId?: SortOrder;
  salesRepId?: SortOrder;
  status?: SortOrder;
  teamSupportRepId?: SortOrder;
  updatedAt?: SortOrder;
};
