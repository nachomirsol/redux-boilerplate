import React, { useState } from "react";
/**Components */
import Icon from "components/Icon";
import Hierarchy from "components/Hierarchy";
import { PopoverController, PopoverTrigger } from "components/Popover";
/**Libraries */
import PropTypes from "prop-types";
/**Mock data */
import hierarchyData from "../../../mockData/hierarchyData/hierarchyData.json";

const SidebarHierarchyItem = ({ expanded, intl }) => {
  const [hierarchyOpen, setHierarchyOpen] = useState(false);
  return (
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
      <div className="sidebar__hierarchy">
        <Hierarchy data={hierarchyData} />
      </div>
    </PopoverController>
  );
};

SidebarHierarchyItem.propTypes = {
  expanded: PropTypes.bool.isRequired,
  intl: PropTypes.object.isRequired
};

export default SidebarHierarchyItem;
