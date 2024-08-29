import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { HaulerServiceBase } from "./base/hauler.service.base";

@Injectable()
export class HaulerService extends HaulerServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
