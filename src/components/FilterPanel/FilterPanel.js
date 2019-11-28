import React, { useState } from "react";
/**Libraries */
import PropTypes from "prop-types";

/**Components */
import FilterPanelItem from "./components/FilterPanelItem";
import Icon from "components/Icon";
/**Styles */
import "./filterPanel.scss";

const FilterPanel = ({ intl, onCheckAsset, onCheckAlertStatus }) => {
  const [expanded, setExpanded] = useState(true);

  const toggleFilter = () => {
    setExpanded(!expanded);
  };
  /**Pending make this component dynamic mapping elements */
  return (
    <div className="filterPanel__wrapper">
      <div className="filterPanel__header">
        {expanded ? (
          <>
            <span>{intl.formatMessage({ id: "app.components.Filterpanel.Title" })}</span>
            <span onClick={() => toggleFilter()}>
              <Icon name="chevron-right"></Icon>
            </span>{" "}
          </>
        ) : (
            <span onClick={() => toggleFilter()}>
              <Icon name="chevron-left"></Icon>
            </span>
          )}
      </div>

      <div className="filterPanel__content">
        {expanded && (
          <div>
            <div className="filter">
              <span className="title"> {intl.formatMessage({ id: "app.components.Filterpanel.Solution.Title" })}</span>
              <ul>

                <li>
                  <FilterPanelItem
                    name={intl.formatMessage({ id: "app.components.Widget.Header.Title.Infraestructures" })}
                    onCheckAsset={onCheckAsset}
                    id={1}
                  />
                </li>
                <li>
                  <FilterPanelItem
                    name={intl.formatMessage({ id: "app.components.Widget.Header.Title.Leaks" })}
                    onCheckAsset={onCheckAsset}
                    id={2}
                  />
                </li>
                <li>
                  <FilterPanelItem
                    name={intl.formatMessage({ id: "app.components.Widget.Header.Title.SmartMetering" })}
                    onCheckAsset={onCheckAsset}
                    id={3}
                  />
                </li>
              </ul>
            </div>
            <div className="filter">
              <span>{intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Title" })}</span>
              <ul>
                <li>
                  <FilterPanelItem
                    status={"critical"}
                    name={intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Critical" })}
                    onCheckAlertStatus={onCheckAlertStatus}
                  />
                </li>
                <li>
                  <FilterPanelItem
                    status={"warning"}
                    name={intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Warning" })}
                    onCheckAlertStatus={onCheckAlertStatus}
                  />
                </li>
                <li>
                  <FilterPanelItem
                    status={"ok"}
                    name={intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Normal" })}
                    onCheckAlertStatus={onCheckAlertStatus}
                  />
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FilterPanel;
