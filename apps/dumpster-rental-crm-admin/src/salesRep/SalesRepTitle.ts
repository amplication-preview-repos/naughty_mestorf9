import { SalesRep as TSalesRep } from "../api/salesRep/SalesRep";

export const SALESREP_TITLE_FIELD = "id";

export const SalesRepTitle = (record: TSalesRep): string => {
  return record.id?.toString() || String(record.id);
};
