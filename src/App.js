import * as React from "react";
import { Admin, Resource } from "react-admin";
import { PostList, PostEdit, PostCreate } from "./posts";
import { UserList } from "./users";
import DashBoard from './Dashboard';
import authProvider from './authProvider';
import PostIcon from "@material-ui/icons/Book";
import UserIcon from "@material-ui/icons/Group";
import jsonServerProvider from "ra-data-json-server";

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider} dashboard={DashBoard} authProvider={authProvider}>
    <Resource
      name="posts"
      list={PostList}
      edit={PostEdit}
      create={PostCreate}
      icon={PostIcon}
    />
    <Resource name="users" list={UserList} icon={UserIcon} />
  </Admin>
);

export default App;
