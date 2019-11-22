import React from "react";
/**Libraries */
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
/**Components */
import Icon from "components/Icon";

const SidebarItem = ({ expanded, item, intl }) => {
  const { pathname } = useLocation();
  const { alarms, icon, text, url, path } = item;
  return (
    <Link to={url}>
      <div
        className={`sidebar__item 
          ${expanded ? "sidebar__item--expanded" : ""}
          ${pathname.includes(path) ? "sidebar__item--selected" : ""}`}
      >
        <Icon name={icon} custom={true} />
        {expanded && (
          <span>
            {intl.formatMessage({ id: `app.components.Sidebar.${text}` })}
          </span>
        )}
        {expanded && alarms > 0 && (
          <span className="sidebar__alarms">{alarms}</span>
        )}
      </div>
    </Link>
  );
};

SidebarItem.propTypes = {
  expanded: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired
};

export default SidebarItem;
