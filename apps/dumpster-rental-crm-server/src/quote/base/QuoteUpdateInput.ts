/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import {
  IsNumber,
  Min,
  Max,
  IsOptional,
  ValidateNested,
  IsDate,
  IsEnum,
} from "class-validator";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";
import { Type } from "class-transformer";
import { HaulerWhereUniqueInput } from "../../hauler/base/HaulerWhereUniqueInput";
import { ProductWhereUniqueInput } from "../../product/base/ProductWhereUniqueInput";
import { SalesRepWhereUniqueInput } from "../../salesRep/base/SalesRepWhereUniqueInput";
import { EnumQuoteStatus } from "./EnumQuoteStatus";
import { TeamSupportRepWhereUniqueInput } from "../../teamSupportRep/base/TeamSupportRepWhereUniqueInput";

@InputType()
class QuoteUpdateInput {
  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  additionalCharges?: number | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  amount?: number | null;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  deliveryDate?: Date | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsNumber()
  @Min(-999999999)
  @Max(999999999)
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  finalWeight?: number | null;

  @ApiProperty({
    required: false,
    type: () => HaulerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => HaulerWhereUniqueInput)
  @IsOptional()
  @Field(() => HaulerWhereUniqueInput, {
    nullable: true,
  })
  hauler?: HaulerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  pickupDate?: Date | null;

  @ApiProperty({
    required: false,
    type: () => ProductWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => ProductWhereUniqueInput)
  @IsOptional()
  @Field(() => ProductWhereUniqueInput, {
    nullable: true,
  })
  product?: ProductWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: () => SalesRepWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => SalesRepWhereUniqueInput)
  @IsOptional()
  @Field(() => SalesRepWhereUniqueInput, {
    nullable: true,
  })
  salesRep?: SalesRepWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    enum: EnumQuoteStatus,
  })
  @IsEnum(EnumQuoteStatus)
  @IsOptional()
  @Field(() => EnumQuoteStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: () => TeamSupportRepWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TeamSupportRepWhereUniqueInput)
  @IsOptional()
  @Field(() => TeamSupportRepWhereUniqueInput, {
    nullable: true,
  })
  teamSupportRep?: TeamSupportRepWhereUniqueInput | null;
}

export { QuoteUpdateInput as QuoteUpdateInput };