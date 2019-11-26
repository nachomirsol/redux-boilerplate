import React from 'react';
/**Libraries */
import PropTypes from "prop-types";
/**Styles */
import "./filterPanelItem.scss";

const FilterPanelItem = ({ name, onCheckAsset, id }) => {
    return (
        <label className="checkbox__container"> {name}
            <input type="checkbox" onClick={() => onCheckAsset(id, name)} />
            <span className="checkmark"></span>
        </label>
    )
}

export default FilterPanelItem;