import React from "react";
/**Libraries */
import PropTypes from "prop-types";
/**Components */
import SidebarItem from "./components/SidebarItem";
/**Config utils */
import sidebarModel from './utils/sidebarModel';
/**Styles */
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

Sidebar.defaultProps = {
  expanded: false
}

export default Sidebar;
