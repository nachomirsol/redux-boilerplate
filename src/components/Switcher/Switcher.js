import React from 'react';
/**Libraries */
import PropTypes from "prop-types";
/**Styles */
import './switcher.scss';

const Switcher = ({ onSwitch }) => {

    return (
        <div className="switcher switcher__wrapper">
            <label className="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={(e) => onSwitch(e)} />
                <div className="slider round"></div>
            </label>
        </div>
    )

}

Switcher.propTypes = {
    onChange: PropTypes.func.isRequired
};


export default Switcher