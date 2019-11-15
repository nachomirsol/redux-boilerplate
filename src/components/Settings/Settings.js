import React from 'react';
/**Libraries */
import intl from 'inject-intl';
import PropTypes from "prop-types";
/**Components */
import Selector from 'components/Selector';
import Switcher from 'components/Switcher';

/**Utils */
import { languages } from '../../utils/const';
/**Styles */
import './settings.scss';


const Settings = ({ }) => {
    <>
        <Selector options={languages} />
        <Switcher />
    </>
}

export default Settings;