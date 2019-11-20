import React, { useState } from "react";
/**Libraries */
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";
/**Components */
import SidebarItem from "./components/SidebarItem";
import Icon from "components/Icon";
import { PopoverController, PopoverTrigger } from "components/Popover";
/**Config utils */
import sidebarModel from "./utils/sidebarModel";
/**Styles */
import "./sidebar.scss";

const Sidebar = ({ expanded, intl }) => {
  const [hierarchyOpen, setHierarchyOpen] = useState(false);
  return (
    <div
      className={`sidebar__wrapper ${
        expanded ? "sidebar__wrapper--expanded" : ""
      }`}
    >
      <div className="sidebar__hierarchy">
        <PopoverController
          place="right-bottom"
          fullHeight={true}
          reloadPosition={expanded}
          handleIsOpen={isOpen => {
            setHierarchyOpen(isOpen);
          }}
        >
          <PopoverTrigger>
            <div
              className={`sidebar__item icon-wrapper--light 
              ${expanded ? "sidebar__item--expanded" : ""}
              ${hierarchyOpen ? "sidebar__item--selected" : ""}`}
            >
              <Icon name="map-marker-alt" />
              {expanded && (
                <span>
                  {intl.formatMessage({
                    id: "app.components.Sidebar.AllMyInfraestructure"
                  })}
                </span>
              )}
            </div>
          </PopoverTrigger>
          <div>
            <div> APARCAOOOOLOLOLOLOLOLOLO </div>
            <div> APARCAOOOOLOLOLOLOLOLOLO </div>
            <div> APARCAOOOOLOLOLOLOLOLOLO </div>
            <div> APARCAOOOOLOLOLOLOLOLOLO </div>
            <div> APARCAOOOOLOLOLOLOLOLOLO </div>
          </div>
        </PopoverController>
      </div>

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
