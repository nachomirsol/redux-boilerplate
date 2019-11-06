import React from "react";
import { SidebarWrapper } from "./Sidebar";
import sidebarModel from './utils/sidebarModel';
import SidebarItem from "./components/SidebarItem";

const Sidebar = ({ expanded }) => {
  return (
    <SidebarWrapper expanded={expanded}>
      {Object.keys(sidebarModel).map((item, index) => {
        return (<SidebarItem key={`sidebar-item-text-${index}`} expanded={expanded} item={sidebarModel[item]}></SidebarItem>)
      })}
    </SidebarWrapper>
  );
};

export default Sidebar;
