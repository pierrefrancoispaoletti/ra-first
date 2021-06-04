import { Create, ReferenceInput, SelectInput, SimpleForm, TextInput } from 'ra-ui-materialui';
import React from 'react';

const PostCreate = (props) => {
    return (
        <Create {...props}>
        <SimpleForm>
            <ReferenceInput source="userId" reference="users">
                <SelectInput optionText="username" />
            </ReferenceInput>
            <TextInput source="title" />
            <TextInput multiline source="body" />
        </SimpleForm>
    </Create>
    );
}

export default PostCreate;
