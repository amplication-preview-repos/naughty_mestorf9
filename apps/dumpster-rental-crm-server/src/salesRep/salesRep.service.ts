import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { SalesRepServiceBase } from "./base/salesRep.service.base";

@Injectable()
export class SalesRepService extends SalesRepServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
