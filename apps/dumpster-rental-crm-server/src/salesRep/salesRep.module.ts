import { Module } from "@nestjs/common";
import { SalesRepModuleBase } from "./base/salesRep.module.base";
import { SalesRepService } from "./salesRep.service";
import { SalesRepController } from "./salesRep.controller";
import { SalesRepResolver } from "./salesRep.resolver";

@Module({
  imports: [SalesRepModuleBase],
  controllers: [SalesRepController],
  providers: [SalesRepService, SalesRepResolver],
  exports: [SalesRepService],
})
export class SalesRepModule {}
