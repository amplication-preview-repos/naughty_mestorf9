/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { HaulerWhereInput } from "./HaulerWhereInput";
import { Type } from "class-transformer";

@ArgsType()
class HaulerCountArgs {
  @ApiProperty({
    required: false,
    type: () => HaulerWhereInput,
  })
  @Field(() => HaulerWhereInput, { nullable: true })
  @Type(() => HaulerWhereInput)
  where?: HaulerWhereInput;
}

export { HaulerCountArgs as HaulerCountArgs };
