import React from 'react';

import { connect } from 'react-redux';

import { IntlProvider } from 'react-intl';

export const LanguageProvider = ({ intl, messages, locale, messages, children }) => { // eslint-disable-line react/prefer-stateless-function
    //Valencian is a special case that for political reasons needs to be differentiated from Catalan.

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