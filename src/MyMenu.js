import * as React from "react";
import { MenuItemLink, usePermissions } from "react-admin";

const Menu = ({ onMenuClick, logout }) => {
  const { permissions } = usePermissions();
  return (
    <div>
      <MenuItemLink to="/posts" primaryText="Posts" onClick={onMenuClick} />
      <MenuItemLink
        to="/users"
        primaryText="Users"
        onClick={onMenuClick}
      />
      {permissions === "admin" && (
        <MenuItemLink
          to="/foo"
          primaryText="Miscellaneous"
          onClick={onMenuClick}
        />
      )}
      {logout}
    </div>
  );
};

export default Menu;