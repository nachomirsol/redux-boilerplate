import React, { useState } from 'react';
/**Libraries */
import PropTypes from "prop-types";
/**Styles */
import './switcher.scss';

const Switcher = ({ type, checked = true, onChange }) => {
    const [isChecked, setIsChecked] = useState(true)

    return (
        <div className="switcher switcher__wrapper">
            <label className="switch" htmlFor="checkbox">
                <input type={type} checked={isChecked} />
                <div className="slider round"></div>
            </label>
        </div>
    )

}

Switcher.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Switcher