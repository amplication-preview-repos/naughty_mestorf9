import * as graphql from "@nestjs/graphql";
import { HaulerResolverBase } from "./base/hauler.resolver.base";
import { Hauler } from "./base/Hauler";
import { HaulerService } from "./hauler.service";

@graphql.Resolver(() => Hauler)
export class HaulerResolver extends HaulerResolverBase {
  constructor(protected readonly service: HaulerService) {
    super(service);
  }
}
