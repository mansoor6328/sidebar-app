import React from "react";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarFooter,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div
      style={{ display: "flex", height: "100vh", overflow: "scroll-initial" }}
    >
      <CDBSidebar textColor="white" backgroundColor="black">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a
            href="/"
            className="text-decoration-none"
            style={{ color: "inherit" }}
          >
            Eros Now
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
            <CDBSidebarMenu>
                <NavLink exact to="/" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="search">Search</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/home" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="home">Home</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/movie" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="video">Movie</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/Shows" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="tv">Shows</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/music" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="music">Music</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/tv" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="tv">TV</CDBSidebarMenuItem>
                </NavLink>
                <NavLink exact to="/account" activeClassName="activeClicked">
                    <CDBSidebarMenuItem icon="user">Account</CDBSidebarMenuItem>
                </NavLink>
                
            </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign:'center'}}>
          <div
            className="sidebar-btn-wrapper"
            style={{
              padding: "20px 5px",
            }}
          >
            Footer
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;
