import React from 'react';
/**Libraries */
import { connect } from 'react-redux';
import { IntlProvider } from 'react-intl';


export const LanguageProvider = ({ intl, messages, locale, children }) => {
    return (
        <IntlProvider locale={locale} key={locale} messages={messages[locale]}>
            {React.Children.only(children)}
        </IntlProvider>
    );
}

const mapStateToProps = (state) => ({
    locale: state.locale
})

export default connect(mapStateToProps)(LanguageProvider);