import React from "react";
import sidebarModel from './utils/sidebarModel';
import SidebarItem from "./components/SidebarItem";
import PropTypes from "prop-types";
import './sidebar.scss';


const Sidebar = ({ expanded }) => {
  return (
    <div className={`sidebar__wrapper ${expanded ? 'sidebar__wrapper--expanded' : ''}`}>
      {Object.keys(sidebarModel).map((item, index) => {
        return (<SidebarItem key={`sidebar-item-text-${index}`} expanded={expanded} item={sidebarModel[item]}></SidebarItem>)
      })}
    </div>
  );
};

Sidebar.propTypes = {
  expanded: PropTypes.bool.isRequired,
}

export default Sidebar;
