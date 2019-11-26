import React from 'react';
/**Libraries */
import PropTypes from "prop-types";
/**Styles */
import "./filterPanelItem.scss";

const FilterPanelItem = ({ name, onCheckAsset, onCheckAlertStatus, id, status }) => {
    return (
        <label className="checkbox__container"> {name}
            <input type="checkbox" onClick={() => { onCheckAsset && onCheckAsset(id, name); onCheckAlertStatus && onCheckAlertStatus(id, status) }} defaultChecked={true} />
            <span className="checkmark"></span>
        </label>
    )
}

export default FilterPanelItem;