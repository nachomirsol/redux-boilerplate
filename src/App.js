
import React, { useEffect } from 'react';

import { connect } from 'react-redux'

import { Routes } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

import { IntlProvider } from 'react-intl';
import { ThemeProvider } from "styled-components";

import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars, faCheckSquare, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import es_translations from './translations/es.json';
import en_translations from './translations/en.json';
import theme from './themes/dark-theme';

import './App.scss';

// add font awesome icons to the library in order to import just used icons
library.add(faBars, faCheckSquare, faEllipsisV);

const routes = Routes();


const App = ({ locale }) => {

  useEffect(() => {
    console.log('language App', locale)
  })

  const translations = {
    es: es_translations,
    en: en_translations
  }

  return (
    <ThemeProvider theme={theme}>
      <IntlProvider key={locale} locale={locale} messages={translations[locale]}>
        <BrowserRouter basename={"/"}>
          {routes}
        </BrowserRouter>
      </IntlProvider>
    </ThemeProvider>
  )
}

const mapStateToProps = (state) => ({
  locale: state.locale.locale
})

export default connect(mapStateToProps)(App)