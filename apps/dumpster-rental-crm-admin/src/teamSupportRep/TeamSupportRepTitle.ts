import { TeamSupportRep as TTeamSupportRep } from "../api/teamSupportRep/TeamSupportRep";

export const TEAMSUPPORTREP_TITLE_FIELD = "id";

export const TeamSupportRepTitle = (record: TTeamSupportRep): string => {
  return record.id?.toString() || String(record.id);
};
