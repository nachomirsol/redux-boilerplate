import React, { useState } from 'react';
/**Libraries */
import PropTypes from "prop-types";
/**Styles */
import './switcher.scss';

const Switcher = ({ defaultChecked }) => {
    const [isChecked, setIsChecked] = useState(defaultChecked);

    const selectCheckbox = () => {
        if (isChecked === true) {
            setIsChecked(!isChecked)
        } else {
            setIsChecked(!isChecked)
        }
    }

    return (
        <div className="switcher switcher__wrapper">
            <label className="switch" htmlFor="checkbox">
                <input type="checkbox" onChange={() => selectCheckbox()} checked={isChecked} />
                <div className="slider round"></div>
            </label>
        </div>
    )

}

Switcher.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Switcher