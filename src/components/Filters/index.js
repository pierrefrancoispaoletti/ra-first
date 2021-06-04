import {
  Filter,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "ra-ui-materialui";
import React from "react";

const PostFilter = (props) => (
  <Filter {...props}>
    <TextInput label="Search" source="q" alwaysOn />
    <ReferenceInput label="User" source="userId" reference="users" allowEmpty>
      <SelectInput optionText="name" />
    </ReferenceInput>
  </Filter>
);

export default PostFilter;
