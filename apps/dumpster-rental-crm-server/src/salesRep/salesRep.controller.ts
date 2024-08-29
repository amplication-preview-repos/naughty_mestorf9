import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { SalesRepService } from "./salesRep.service";
import { SalesRepControllerBase } from "./base/salesRep.controller.base";

@swagger.ApiTags("salesReps")
@common.Controller("salesReps")
export class SalesRepController extends SalesRepControllerBase {
  constructor(protected readonly service: SalesRepService) {
    super(service);
  }
}
