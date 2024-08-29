import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  TextField,
  DateField,
  ReferenceField,
} from "react-admin";
import { CUSTOMER_TITLE_FIELD } from "../customer/CustomerTitle";
import { HAULER_TITLE_FIELD } from "../hauler/HaulerTitle";
import { PRODUCT_TITLE_FIELD } from "../product/ProductTitle";
import { SALESREP_TITLE_FIELD } from "../salesRep/SalesRepTitle";
import { TEAMSUPPORTREP_TITLE_FIELD } from "../teamSupportRep/TeamSupportRepTitle";

export const QuoteShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <TextField label="additionalCharges" source="additionalCharges" />
        <TextField label="amount" source="amount" />
        <DateField source="createdAt" label="Created At" />
        <ReferenceField
          label="Customer"
          source="customer.id"
          reference="Customer"
        >
          <TextField source={CUSTOMER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="deliveryDate" source="deliveryDate" />
        <TextField label="finalWeight" source="finalWeight" />
        <ReferenceField label="Hauler" source="hauler.id" reference="Hauler">
          <TextField source={HAULER_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="ID" source="id" />
        <TextField label="pickupDate" source="pickupDate" />
        <ReferenceField label="Product" source="product.id" reference="Product">
          <TextField source={PRODUCT_TITLE_FIELD} />
        </ReferenceField>
        <ReferenceField
          label="SalesRep"
          source="salesrep.id"
          reference="SalesRep"
        >
          <TextField source={SALESREP_TITLE_FIELD} />
        </ReferenceField>
        <TextField label="status" source="status" />
        <ReferenceField
          label="TeamSupportRep"
          source="teamsupportrep.id"
          reference="TeamSupportRep"
        >
          <TextField source={TEAMSUPPORTREP_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
