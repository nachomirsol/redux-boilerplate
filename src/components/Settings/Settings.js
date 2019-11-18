import React from 'react';
/**Libraries */
import { injectIntl } from "react-intl";
import PropTypes from "prop-types";
/**Components */
import Selector from 'components/Selector';
import Switcher from 'components/Switcher';
import withSettings from 'components/hocs/WithSettings';

/**Utils */
import { languages } from '../../utils/const';
/**Styles */
import './settings.scss';


const Settings = ({ intl, settings, changeLocale }) => {

    return (
        <div className="settings settings__wrapper">
            <div className="settings__selector">
                <label htmlFor="languageSelector">{intl.formatMessage({ id: "app.components.Language.Selector.Title" })}</label>
                <Selector options={languages} onChange={(locale) => changeLocale(locale)} defaultValue={settings.locale} value={settings.locale} />
            </div>
            <div className="settings__switcher">
                <Switcher />
                <label htmlFor="themeSwitcher" className="label__switcher">{intl.formatMessage({ id: "app.components.Theme.Switcher.Title.Dark" })}</label>
            </div>
        </div>
    )
}

Settings.propTypes = {

    changeSettings: PropTypes.func.isRequired
};


export default withSettings(injectIntl(Settings));