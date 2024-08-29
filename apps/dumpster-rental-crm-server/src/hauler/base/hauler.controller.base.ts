/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { HaulerService } from "../hauler.service";
import { HaulerCreateInput } from "./HaulerCreateInput";
import { Hauler } from "./Hauler";
import { HaulerFindManyArgs } from "./HaulerFindManyArgs";
import { HaulerWhereUniqueInput } from "./HaulerWhereUniqueInput";
import { HaulerUpdateInput } from "./HaulerUpdateInput";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { OrderWhereUniqueInput } from "../../order/base/OrderWhereUniqueInput";
import { QuoteFindManyArgs } from "../../quote/base/QuoteFindManyArgs";
import { Quote } from "../../quote/base/Quote";
import { QuoteWhereUniqueInput } from "../../quote/base/QuoteWhereUniqueInput";

export class HaulerControllerBase {
  constructor(protected readonly service: HaulerService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: Hauler })
  async createHauler(@common.Body() data: HaulerCreateInput): Promise<Hauler> {
    return await this.service.createHauler({
      data: data,
      select: {
        createdAt: true,
        id: true,
        name: true,
        pricing: true,
        updatedAt: true,
        zipCode: true,
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [Hauler] })
  @ApiNestedQuery(HaulerFindManyArgs)
  async haulers(@common.Req() request: Request): Promise<Hauler[]> {
    const args = plainToClass(HaulerFindManyArgs, request.query);
    return this.service.haulers({
      ...args,
      select: {
        createdAt: true,
        id: true,
        name: true,
        pricing: true,
        updatedAt: true,
        zipCode: true,
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: Hauler })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async hauler(
    @common.Param() params: HaulerWhereUniqueInput
  ): Promise<Hauler | null> {
    const result = await this.service.hauler({
      where: params,
      select: {
        createdAt: true,
        id: true,
        name: true,
        pricing: true,
        updatedAt: true,
        zipCode: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: Hauler })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateHauler(
    @common.Param() params: HaulerWhereUniqueInput,
    @common.Body() data: HaulerUpdateInput
  ): Promise<Hauler | null> {
    try {
      return await this.service.updateHauler({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          name: true,
          pricing: true,
          updatedAt: true,
          zipCode: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: Hauler })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteHauler(
    @common.Param() params: HaulerWhereUniqueInput
  ): Promise<Hauler | null> {
    try {
      return await this.service.deleteHauler({
        where: params,
        select: {
          createdAt: true,
          id: true,
          name: true,
          pricing: true,
          updatedAt: true,
          zipCode: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Get("/:id/orders")
  @ApiNestedQuery(OrderFindManyArgs)
  async findOrders(
    @common.Req() request: Request,
    @common.Param() params: HaulerWhereUniqueInput
  ): Promise<Order[]> {
    const query = plainToClass(OrderFindManyArgs, request.query);
    const results = await this.service.findOrders(params.id, {
      ...query,
      select: {
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        hauler: {
          select: {
            id: true,
          },
        },

        id: true,

        product: {
          select: {
            id: true,
          },
        },

        salesRep: {
          select: {
            id: true,
          },
        },

        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/orders")
  async connectOrders(
    @common.Param() params: HaulerWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        connect: body,
      },
    };
    await this.service.updateHauler({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/orders")
  async updateOrders(
    @common.Param() params: HaulerWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        set: body,
      },
    };
    await this.service.updateHauler({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/orders")
  async disconnectOrders(
    @common.Param() params: HaulerWhereUniqueInput,
    @common.Body() body: OrderWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      orders: {
        disconnect: body,
      },
    };
    await this.service.updateHauler({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Get("/:id/quotes")
  @ApiNestedQuery(QuoteFindManyArgs)
  async findQuotes(
    @common.Req() request: Request,
    @common.Param() params: HaulerWhereUniqueInput
  ): Promise<Quote[]> {
    const query = plainToClass(QuoteFindManyArgs, request.query);
    const results = await this.service.findQuotes(params.id, {
      ...query,
      select: {
        additionalCharges: true,
        amount: true,
        createdAt: true,

        customer: {
          select: {
            id: true,
          },
        },

        deliveryDate: true,
        finalWeight: true,

        hauler: {
          select: {
            id: true,
          },
        },

        id: true,
        pickupDate: true,

        product: {
          select: {
            id: true,
          },
        },

        salesRep: {
          select: {
            id: true,
          },
        },

        status: true,

        teamSupportRep: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (results === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return results;
  }

  @common.Post("/:id/quotes")
  async connectQuotes(
    @common.Param() params: HaulerWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quotes: {
        connect: body,
      },
    };
    await this.service.updateHauler({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Patch("/:id/quotes")
  async updateQuotes(
    @common.Param() params: HaulerWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quotes: {
        set: body,
      },
    };
    await this.service.updateHauler({
      where: params,
      data,
      select: { id: true },
    });
  }

  @common.Delete("/:id/quotes")
  async disconnectQuotes(
    @common.Param() params: HaulerWhereUniqueInput,
    @common.Body() body: QuoteWhereUniqueInput[]
  ): Promise<void> {
    const data = {
      quotes: {
        disconnect: body,
      },
    };
    await this.service.updateHauler({
      where: params,
      data,
      select: { id: true },
    });
  }
}
