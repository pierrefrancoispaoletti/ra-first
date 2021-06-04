import {
  Datagrid,
  EmailField,
  List,
  SimpleList,
  TextField,
  UrlField,
} from "ra-ui-materialui";
import { useMediaQuery } from "@material-ui/core";
import React from "react";

const UserList = (props) => {
  const isSmall = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  return (
    <List {...props}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.name}
          secondaryText={(record) => record.email}
          tertiaryText={(record) => record.phone}
        />
      ) : (
        <Datagrid rowClick="edit">
          <TextField source="id" />
          <TextField source="name" />
          <TextField source="username" />
          <EmailField source="email" />
          <TextField source="address.street" />
          <TextField source="phone" />
          <UrlField source="website" />
          <TextField source="company.name" />
        </Datagrid>
      )}
    </List>
  );
};

export default UserList;
