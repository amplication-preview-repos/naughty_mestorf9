import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  NumberInput,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
} from "react-admin";

import { CustomerTitle } from "../customer/CustomerTitle";
import { HaulerTitle } from "../hauler/HaulerTitle";
import { ProductTitle } from "../product/ProductTitle";
import { SalesRepTitle } from "../salesRep/SalesRepTitle";
import { TeamSupportRepTitle } from "../teamSupportRep/TeamSupportRepTitle";

export const QuoteCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <NumberInput label="additionalCharges" source="additionalCharges" />
        <NumberInput label="amount" source="amount" />
        <ReferenceInput
          source="customer.id"
          reference="Customer"
          label="Customer"
        >
          <SelectInput optionText={CustomerTitle} />
        </ReferenceInput>
        <DateTimeInput label="deliveryDate" source="deliveryDate" />
        <NumberInput label="finalWeight" source="finalWeight" />
        <ReferenceInput source="hauler.id" reference="Hauler" label="Hauler">
          <SelectInput optionText={HaulerTitle} />
        </ReferenceInput>
        <DateTimeInput label="pickupDate" source="pickupDate" />
        <ReferenceInput source="product.id" reference="Product" label="Product">
          <SelectInput optionText={ProductTitle} />
        </ReferenceInput>
        <ReferenceInput
          source="salesRep.id"
          reference="SalesRep"
          label="SalesRep"
        >
          <SelectInput optionText={SalesRepTitle} />
        </ReferenceInput>
        <SelectInput
          source="status"
          label="status"
          choices={[{ label: "Option 1", value: "Option1" }]}
          optionText="label"
          allowEmpty
          optionValue="value"
        />
        <ReferenceInput
          source="teamSupportRep.id"
          reference="TeamSupportRep"
          label="TeamSupportRep"
        >
          <SelectInput optionText={TeamSupportRepTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
