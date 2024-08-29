import { HaulerWhereInput } from "./HaulerWhereInput";
import { HaulerOrderByInput } from "./HaulerOrderByInput";

export type HaulerFindManyArgs = {
  where?: HaulerWhereInput;
  orderBy?: Array<HaulerOrderByInput>;
  skip?: number;
  take?: number;
};
