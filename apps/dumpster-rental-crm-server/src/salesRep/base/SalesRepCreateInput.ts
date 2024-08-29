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
import { OrderCreateNestedManyWithoutSalesRepsInput } from "./OrderCreateNestedManyWithoutSalesRepsInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";
import { QuoteCreateNestedManyWithoutSalesRepsInput } from "./QuoteCreateNestedManyWithoutSalesRepsInput";

@InputType()
class SalesRepCreateInput {
  @ApiProperty({
    required: false,
    type: () => OrderCreateNestedManyWithoutSalesRepsInput,
  })
  @ValidateNested()
  @Type(() => OrderCreateNestedManyWithoutSalesRepsInput)
  @IsOptional()
  @Field(() => OrderCreateNestedManyWithoutSalesRepsInput, {
    nullable: true,
  })
  orders?: OrderCreateNestedManyWithoutSalesRepsInput;

  @ApiProperty({
    required: false,
    type: () => QuoteCreateNestedManyWithoutSalesRepsInput,
  })
  @ValidateNested()
  @Type(() => QuoteCreateNestedManyWithoutSalesRepsInput)
  @IsOptional()
  @Field(() => QuoteCreateNestedManyWithoutSalesRepsInput, {
    nullable: true,
  })
  quotes?: QuoteCreateNestedManyWithoutSalesRepsInput;
}

export { SalesRepCreateInput as SalesRepCreateInput };