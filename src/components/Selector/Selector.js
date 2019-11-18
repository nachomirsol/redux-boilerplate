import React from 'react';
/**Libraries */
import PropTypes from "prop-types";
/**Styles */
import "./selector.scss";

const Selector = ({ options, selectName, value, onChange }) => {
    return (
        <div className="selector">
            <select
                name={selectName}
                value={value}
                onChange={(e) => onChange(e.target.value)}>
                {options.map((option, index) => (
                    <option value={option ? option.value : option} key={index}>{option ? option.name : option}</option>
                ))}

            </select>
            <i className="fa fa-chevron-down select-arrow-user-settings language" style={{ pointerEvents: 'none' }} />
        </div>
    )
}

export default Selector;

Selector.propTypes = {
    options: PropTypes.array.isRequired,
    selectName: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
