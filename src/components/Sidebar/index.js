import React from "react";
import { SidebarWrapper } from "./Sidebar";
import model from './utils/sidebarModel';
import SidebarItem from "./components/SidebarItem";

const Sidebar = ({ expanded }) => {
  return (
    <SidebarWrapper expanded={expanded}>
      {Object.keys(model).map((item, index) => {
        return (<SidebarItem key={`sidebar-item-text-${index}`} expanded={expanded} item={model[item]}></SidebarItem>)
      })}
    </SidebarWrapper>
  );
};

export default Sidebar;
