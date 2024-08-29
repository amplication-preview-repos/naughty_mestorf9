import { Module } from "@nestjs/common";
import { TeamSupportRepModuleBase } from "./base/teamSupportRep.module.base";
import { TeamSupportRepService } from "./teamSupportRep.service";
import { TeamSupportRepController } from "./teamSupportRep.controller";
import { TeamSupportRepResolver } from "./teamSupportRep.resolver";

@Module({
  imports: [TeamSupportRepModuleBase],
  controllers: [TeamSupportRepController],
  providers: [TeamSupportRepService, TeamSupportRepResolver],
  exports: [TeamSupportRepService],
})
export class TeamSupportRepModule {}
