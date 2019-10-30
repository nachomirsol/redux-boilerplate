
import React, { useEffect } from 'react';

import { connect } from 'react-redux'

import { Routes } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

import { IntlProvider } from 'react-intl';
import { ThemeProvider } from "styled-components";

import es_translations from './translations/es.json';
import en_translations from './translations/en.json';
import theme from './theme/theme';

import './App.scss';

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
        <BrowserRouter children={routes} basename={"/"} />
      </IntlProvider>
    </ThemeProvider>
  )
}

const mapStateToProps = (state) => ({
  locale: state.locale.locale
})

export default connect(mapStateToProps)(App)