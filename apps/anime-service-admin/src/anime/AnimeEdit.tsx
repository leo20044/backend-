import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AnimeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <DateTimeInput label="ReleaseDate" source="releaseDate" />
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Edit>
  );
};
