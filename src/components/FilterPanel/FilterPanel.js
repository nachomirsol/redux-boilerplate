import React, { useState } from "react";
/**Libraries */
import PropTypes from "prop-types";

/**Components */
import FilterPanelItem from "./components/FilterPanelItem";
import Icon from "components/Icon";
/**Styles */
import "./filterPanel.scss";

const FilterPanel = ({ intl, onCheckAsset, filters, changeFilterState }) => {
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
            <span>
              {intl.formatMessage({ id: "app.components.Filterpanel.Title" })}
            </span>
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
        {expanded &&
          filters &&
          filters.map((filter, keyIndex) => {
            return (
              <div className="filter" key={keyIndex}>
                <span className="title">
                  {" "}
                  {intl.formatMessage({ id: filter.title })}
                </span>
                <ul>
                  {filter.items.map((item, index) => {
                    return (
                      <li key={`${keyIndex}-${index}`}>
                        <FilterPanelItem
                          name={intl.formatMessage({ id: item.name })}
                          variableName={item.variableName}
                          value={item.value}
                          onCheckAsset={onCheckAsset}
                          checked={item.checked}
                          onChecked={(e) => changeFilterState(filters, filter.name, item.name, e)}
                        />
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
      </div>
    </div>
  );
};

FilterPanel.propTypes = {
  intl: PropTypes.object.isRequired,
  onCheckAsset: PropTypes.func.isRequired,
  filters: PropTypes.array.isRequired
};

export default FilterPanel;
