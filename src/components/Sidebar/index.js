import React from "react";
import sidebarModel from './utils/sidebarModel';
import SidebarItem from "./components/SidebarItem";
import PropTypes from "prop-types";
import { SidebarWrapper } from "./Sidebar";


const Sidebar = ({ expanded }) => {
  return (
    <SidebarWrapper expanded={expanded}>
      {Object.keys(sidebarModel).map((item, index) => {
        return (<SidebarItem key={`sidebar-item-text-${index}`} expanded={expanded} item={sidebarModel[item]}></SidebarItem>)
      })}
    </SidebarWrapper>
  );
};

Sidebar.propTypes = {
  expanded: PropTypes.bool.isRequired,
}

export default Sidebar;
