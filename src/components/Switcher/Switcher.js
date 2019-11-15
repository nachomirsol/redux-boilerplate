import React, { useState } from 'react';
/**Libraries */
import { injectIntl } from "react-intl";
/**Components */

/**Styles */
import './switcher.scss';

const Switcher = () => {

    return (
        <div className="switcher switcher__wrapper">
            <label className="switch" htmlFor="checkbox">
                <input type="checkbox" id="checkbox" />
                <div className="slider round"></div>
            </label>
        </div>
    )

}

export default Switcher