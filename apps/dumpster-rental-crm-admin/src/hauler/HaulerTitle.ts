import { Hauler as THauler } from "../api/hauler/Hauler";

export const HAULER_TITLE_FIELD = "name";

export const HaulerTitle = (record: THauler): string => {
  return record.name?.toString() || String(record.id);
};
