import React, { useState } from "react";
/**Libraries */
import PropTypes from "prop-types";

/**Components */
import FilterPanelItem from "./components/FilterPanelItem";
import Icon from "components/Icon";
/**Styles */
import "./filterPanel.scss";

const FilterPanel = ({ intl, onCheckAsset }) => {
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
                    variableName={"assetName"}
                    value={"deposito"}
                    onCheckAsset={onCheckAsset}
                    id={1}
                  />
                </li>
                <li>
                  <FilterPanelItem
                    name={intl.formatMessage({ id: "app.components.Widget.Header.Title.Leaks" })}
                    variableName={"assetName"}
                    value={"bomba"}
                    onCheckAsset={onCheckAsset}
                    id={2}
                  />
                </li>
                <li>
                  <FilterPanelItem
                    name={intl.formatMessage({ id: "app.components.Widget.Header.Title.SmartMetering" })}
                    variableName={"assetName"}
                    value={"deposito"}
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
                    variableName={"state"}
                    value={"critical"}
                    onCheckAsset={onCheckAsset}
                  />
                </li>
                <li>
                  <FilterPanelItem
                    status={"warning"}
                    name={intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Warning" })}
                    variableName={"state"}
                    value={"warning"}
                    onCheckAsset={onCheckAsset}
                  />
                </li>
                <li>
                  <FilterPanelItem
                    status={"ok"}
                    name={intl.formatMessage({ id: "app.components.Filterpanel.AlertLevel.Normal" })}
                    variableName={"state"}
                    value={"ok"}
                    onCheckAsset={onCheckAsset}
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

FilterPanel.propTypes = {
  intl: PropTypes.object.isRequired,
  onCheckAsset: PropTypes.func.isRequired,
}

export default FilterPanel;
