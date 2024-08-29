import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { TeamSupportRepServiceBase } from "./base/teamSupportRep.service.base";

@Injectable()
export class TeamSupportRepService extends TeamSupportRepServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
