import React from 'react';
/**Libraries */
import { injectIntl } from 'react-intl';
import PropTypes from "prop-types";
/**Components */
import Selector from 'components/Selector';
import Switcher from 'components/Switcher';

/**Utils */
import { languages } from '../../utils/const';
/**Styles */
import './settings.scss';


const Settings = ({ intl }) => {
    return (
        <div className="settings settings__wrapper">
            <div className="settings__selector">
                <label htmlFor="languageSelector">{intl.formatMessage({ id: "app.components.Language.Selector.Title" })}</label>
                <Selector options={languages} />
            </div>
            <div className="settings__switcher">
                <Switcher />
                <label htmlFor="themeSwitcher" className="label__switcher">{intl.formatMessage({ id: "app.components.Theme.Switcher.Title.Dark" })}</label>
            </div>
        </div>
    )
}

export default injectIntl(Settings);