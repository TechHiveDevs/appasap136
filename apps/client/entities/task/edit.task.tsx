
import { 
  Edit,
  SimpleForm,
  
required,
TextInput,
AutocompleteInput,
BooleanInput,
ReferenceInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditTask(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <TextInput source="description" variant="outlined" validate={required()}  />
<AutocompleteInput variant="outlined" source="urgency" choices={[
{ id: "High", name: "High" },
{ id: "Low", name: "Low" },
]}  />
<BooleanInput source="iscritical" variant="outlined"  />
<ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}