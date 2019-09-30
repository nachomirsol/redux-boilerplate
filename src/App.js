
import React, { useEffect } from 'react';

import { connect } from 'react-redux'

import { Routes } from "./routes/routes";
import { BrowserRouter } from "react-router-dom";

import { IntlProvider } from 'react-intl';

import es_translations from './translations/es.json';
import en_translations from './translations/en.json';

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

    <IntlProvider key={locale} locale={locale} messages={translations[locale]}>
      <BrowserRouter children={routes} basename={"/"} />
    </IntlProvider>

  )
}

const mapStateToProps = (state) => ({
  locale: state.locale.locale
})

export default connect(mapStateToProps)(App)