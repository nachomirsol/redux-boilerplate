import React, { useState } from 'react';
/**Libraries */
import { injectIntl } from "react-intl";
/**Components */

/**Styles */
import './switcher.scss';

const Switcher = ({ changeTheme, defaultChecked }) => {

    const [checked, setChecked] = useState(defaultChecked);

    const onChangeTheme = () => {
        if (checked === true) {
            changeTheme('theme-light');

            setChecked(!checked)
        } else {
            changeTheme('theme-dark');
            setChecked(!checked)
        }

    }

    return (
        <div className="switcher switcher__wrapper">
            <label className="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" onChange={() => onChangeTheme()} checked={defaultChecked} />
                <div className="slider round"></div>
            </label>
        </div>
    )

}

export default injectIntl(Switcher)