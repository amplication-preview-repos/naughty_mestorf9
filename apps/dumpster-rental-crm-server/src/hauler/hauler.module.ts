import { Module } from "@nestjs/common";
import { HaulerModuleBase } from "./base/hauler.module.base";
import { HaulerService } from "./hauler.service";
import { HaulerController } from "./hauler.controller";
import { HaulerResolver } from "./hauler.resolver";

@Module({
  imports: [HaulerModuleBase],
  controllers: [HaulerController],
  providers: [HaulerService, HaulerResolver],
  exports: [HaulerService],
})
export class HaulerModule {}
