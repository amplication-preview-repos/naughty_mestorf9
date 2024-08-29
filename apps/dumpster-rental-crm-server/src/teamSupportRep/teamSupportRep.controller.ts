import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { TeamSupportRepService } from "./teamSupportRep.service";
import { TeamSupportRepControllerBase } from "./base/teamSupportRep.controller.base";

@swagger.ApiTags("teamSupportReps")
@common.Controller("teamSupportReps")
export class TeamSupportRepController extends TeamSupportRepControllerBase {
  constructor(protected readonly service: TeamSupportRepService) {
    super(service);
  }
}
