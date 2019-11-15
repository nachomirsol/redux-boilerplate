import React, { useEffect } from "react";
/**Libraries */
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { IntlProvider } from "react-intl";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBars,
  faQuestion,
  faCog,
  faBell,
  faSignOutAlt,
  faTh,
  faEllipsisV,
  faBolt,
  faBroadcastTower,
  faGlassWhiskey
} from "@fortawesome/free-solid-svg-icons";
/**Components */
import { Routes } from "./routes/routes";
/**Translations data */
import es_translations from "./translations/es.json";
import en_translations from "./translations/en.json";
/**Styles */
import "styles/main.scss";

// add font awesome icons to the library in order to import just used icons
library.add(faBars, faQuestion, faCog, faBell, faSignOutAlt, faTh, faEllipsisV, faBolt, faBroadcastTower, faGlassWhiskey);

const routes = Routes();

const App = ({ locale }) => {
  useEffect(() => {
    console.log("language App", locale);
  });

  const translations = {
    es: es_translations,
    en: en_translations
  };

  return (
    <IntlProvider key={locale} locale={locale} messages={translations[locale]}>
      <BrowserRouter basename={"/"}>{routes}</BrowserRouter>
    </IntlProvider>
  );
};

App.propTypes = {
  locale: PropTypes.string.isRequired
};

const mapStateToProps = state => ({
  locale: state.locale.locale
});

export default connect(mapStateToProps)(App);
