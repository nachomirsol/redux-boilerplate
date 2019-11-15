import React from 'react';
/**Libraries */
import PropTypes from "prop-types";
/**Styles */
import "./selector.scss";

const Selector = ({ options, selectName, defaultValue, onChange }) => {
    return (
        <div className="selector">
            <select
                name={selectName}
                defaultValue={defaultValue}
                onChange={e => {
                    onChange(e);
                }}>
                {options.map((option, index) => (
                    <option value={option ? option.value : option}>{option ? option.name : option}</option>
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
    defaultValue: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired
};
