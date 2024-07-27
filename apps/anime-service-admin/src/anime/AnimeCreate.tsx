import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  DateTimeInput,
  TextInput,
} from "react-admin";

export const AnimeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <DateTimeInput label="ReleaseDate" source="releaseDate" />
        <TextInput label="Title" source="title" />
        <TextInput label="Description" multiline source="description" />
      </SimpleForm>
    </Create>
  );
};
