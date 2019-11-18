import React from 'react';
/**Libraries */
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';


export const LanguageProvider = ({ intl, messages, locale, children }) => {
    return (
        <IntlProvider locale={settings.locale} key={settings.locale} messages={messages[settings.locale]}>
            {React.Children.only(children)}
        </IntlProvider>
    );
}

const mapStateToProps = (state) => ({
    settings: state.settings
})

export default connect(mapStateToProps)(LanguageProvider);