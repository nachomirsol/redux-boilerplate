import React from "react";
/**Libraries */
import PropTypes from "prop-types";
/**Styles */
import "./filterPanelItem.scss";

const FilterPanelItem = ({
  variableName,
  name,
  onCheckAsset,
  value,
  checked,
  onChecked
}) => {
  return (
    <label className="checkbox__container">
      {name}
      <input
        type="checkbox"
        onClick={e => {
          onCheckAsset && onCheckAsset(variableName, value, e.target.checked);
          onChecked && onChecked(e.target.checked);
        }}
        checked={checked}
      />
      <span className="checkmark"></span>
    </label>
  );
};

FilterPanelItem.propTypes = {
    variableName: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    onCheckAsset: PropTypes.func.isRequired,
    value: PropTypes.string.isRequired,
  }

export default FilterPanelItem;
