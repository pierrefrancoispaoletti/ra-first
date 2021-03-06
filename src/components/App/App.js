import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UserList from "../UserList";
import PostList from "../PostList";
import PostEdit from "../PostEdit";
import PostCreate from "../PostCreate";
import PostIcon from '@material-ui/icons/Book';
import UserIcon from '@material-ui/icons/Group';
import Home from "../../pages/Home";
import authProvider from "../../auth"


const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => {
  return (
    <Admin dashboard={Home} authProvider={authProvider} dataProvider={dataProvider}>
      <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
      <Resource name="users" list={UserList} icon={UserIcon} />
    </Admin>
  );
};

export default App;
