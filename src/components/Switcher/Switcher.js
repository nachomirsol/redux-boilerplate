import React, { useState } from 'react';
/**Libraries */
import PropTypes from "prop-types";
/**Styles */
import './switcher.scss';

const Switcher = ({ defaultChecked, changeTheme }) => {
    const [value, setValue] = useState(defaultChecked);

    return (
        <div className="switcher switcher__wrapper">
            <label className="switch" htmlFor="checkbox">
                <input type="checkbox" onChange={() => setValue((previous) => !previous.value)} checked={value} />
                <div className="slider round"></div>
            </label>
        </div>
    )

}

Switcher.propTypes = {
    onChange: PropTypes.func.isRequired
};

export default Switcher