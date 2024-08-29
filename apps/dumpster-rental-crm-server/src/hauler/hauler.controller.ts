import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { HaulerService } from "./hauler.service";
import { HaulerControllerBase } from "./base/hauler.controller.base";

@swagger.ApiTags("haulers")
@common.Controller("haulers")
export class HaulerController extends HaulerControllerBase {
  constructor(protected readonly service: HaulerService) {
    super(service);
  }
}
