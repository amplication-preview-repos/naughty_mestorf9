import * as graphql from "@nestjs/graphql";
import { SalesRepResolverBase } from "./base/salesRep.resolver.base";
import { SalesRep } from "./base/SalesRep";
import { SalesRepService } from "./salesRep.service";

@graphql.Resolver(() => SalesRep)
export class SalesRepResolver extends SalesRepResolverBase {
  constructor(protected readonly service: SalesRepService) {
    super(service);
  }
}
