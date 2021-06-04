import {
  Edit,
  ReferenceInput,
  SelectInput,
  SimpleForm,
  TextInput,
} from "ra-ui-materialui";
import React from "react";

const PostTitle = ({ record }) => {
    return <span>Post {record ? `"${record.title}"` : ""}</span>;
  };

const PostEdit = (props) => {
  return (
    <Edit title={<PostTitle />} {...props}>
      <SimpleForm>
        <TextInput disabled source="id" />
        <ReferenceInput source="userId" reference="users">
          <SelectInput optionText="username" />
        </ReferenceInput>
        <TextInput source="title" />
        <TextInput multiline source="body" />
      </SimpleForm>
    </Edit>
  );
};

export default PostEdit;
