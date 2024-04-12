import React from "react";
import { Outlet } from "react-router-dom";
import {
  MenuBar,
  MenuItem,
  MenuList,
  MenuLink,
} from "../../styled_components/ArticleTopBar";

const ArticleTopBar = () => {
  return (
    <>
      <MenuBar>
        <MenuList>
          <MenuItem>
            <MenuLink to="/home">Home</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/articles">All articles</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/articles/my-articles">My articles</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/articles/archived">My archived articles</MenuLink>
          </MenuItem>
          <MenuItem>
            <MenuLink to="/articles/new">New article</MenuLink>
          </MenuItem>
        </MenuList>
      </MenuBar>
      
      <Outlet />
    </>
  );
};

export default ArticleTopBar;
