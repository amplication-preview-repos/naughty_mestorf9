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
import { HaulerCreateInput } from "./HaulerCreateInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";

@ArgsType()
class CreateHaulerArgs {
  @ApiProperty({
    required: true,
    type: () => HaulerCreateInput,
  })
  @ValidateNested()
  @Type(() => HaulerCreateInput)
  @Field(() => HaulerCreateInput, { nullable: false })
  data!: HaulerCreateInput;
}

export { CreateHaulerArgs as CreateHaulerArgs };
