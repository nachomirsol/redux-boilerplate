import React from "react";
/**Libraries */
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
/**Components */
import SidebarItem from "./components/SidebarItem";
import SidebarHierarchyItem from "./components/SidebarHierarchyItem";
/**Config utils */
import sidebarModel from "./utils/sidebarModel";
/**Styles */
import "./sidebar.scss";

const Sidebar = ({ expanded, intl }) => {
  return (
    <div
      className={`sidebar__wrapper ${
        expanded ? "sidebar__wrapper--expanded" : ""
        }`}
    >
      <SidebarHierarchyItem expanded={expanded} intl={intl} />
      <div className="menu-separator"></div>
      {Object.keys(sidebarModel).map((item, index) => {
        return (
          <SidebarItem
            key={`sidebar-item-text-${index}`}
            expanded={expanded}
            item={sidebarModel[item]}
            intl={intl}
          ></SidebarItem>
        );
      })}
    </div>
  );
};

Sidebar.propTypes = {
  expanded: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired
};

Sidebar.defaultProps = {
  expanded: false
};

export default injectIntl(Sidebar);
