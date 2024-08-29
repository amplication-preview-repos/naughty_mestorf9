import { Quote } from "../quote/Quote";

export type TeamSupportRep = {
  createdAt: Date;
  id: string;
  quotes?: Array<Quote>;
  updatedAt: Date;
};
