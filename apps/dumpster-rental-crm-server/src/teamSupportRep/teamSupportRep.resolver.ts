import * as graphql from "@nestjs/graphql";
import { TeamSupportRepResolverBase } from "./base/teamSupportRep.resolver.base";
import { TeamSupportRep } from "./base/TeamSupportRep";
import { TeamSupportRepService } from "./teamSupportRep.service";

@graphql.Resolver(() => TeamSupportRep)
export class TeamSupportRepResolver extends TeamSupportRepResolverBase {
  constructor(protected readonly service: TeamSupportRepService) {
    super(service);
  }
}
