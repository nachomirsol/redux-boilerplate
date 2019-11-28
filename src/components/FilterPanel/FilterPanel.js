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
            <span>Filtrar por</span>
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
              <span className="title"> Tipo</span>
              <ul>
                <li>
                  <FilterPanelItem
                    variableName={"assetName"}
                    name={"deposito"}
                    value={"deposito"}
                    onCheckAsset={onCheckAsset}
                    id={1}
                  />
                </li>
                <li>
                  <FilterPanelItem
                    variableName={"assetName"}
                    name={"bomba"}
                    value={"bomba"}
                    onCheckAsset={onCheckAsset}
                    id={2}
                  />
                </li>
              </ul>
            </div>
            <div className="filter">
              <span>Niveles de alarma</span>
              <ul>
                <li>
                  <FilterPanelItem
                    variableName={"state"}
                    value={"critical"}
                    name={"Critical"}
                    onCheckAsset={onCheckAsset}
                  />
                </li>
                <li>
                  <FilterPanelItem
                    variableName={"state"}
                    value={"warning"}
                    name={"Warning"}
                    onCheckAsset={onCheckAsset}
                  />
                </li>
                <li>
                  <FilterPanelItem
                    variableName={"state"}
                    value={"ok"}
                    name={"Normal"}
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
