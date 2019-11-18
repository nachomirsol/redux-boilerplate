import React from "react";
/**Libraries */
import { injectIntl } from "react-intl";
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
        className={`sidebar__items 
          ${expanded ? "sidebar__items--expanded" : ""}
          ${ pathname.includes(path) ? "selected" : ""}`}
      >
        <Icon name={icon} custom={true} />
        {expanded && (
          <span>
            {intl.formatMessage({ id: `app.components.Sidebar.${text}` })}
          </span>
        )}
        {expanded && alarms > 0 && <span className="sidebar__alarms">{alarms}</span>}
      </div>
    </Link>
  );
};

SidebarItem.propTypes = {
  expanded: PropTypes.bool.isRequired,
  item: PropTypes.object.isRequired,
  intl: PropTypes.object.isRequired,
};

export default injectIntl(SidebarItem);
