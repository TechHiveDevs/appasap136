
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
BooleanField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowTask(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <NumberField source="id" />
<TextField source="description" />
<TextField source="urgency" />
<BooleanField source="iscritical" />
<ReferenceField source="userid" reference="user" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}