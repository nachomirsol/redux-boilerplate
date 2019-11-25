import React, { useEffect } from "react";
/**Libraries */
import PropTypes from "prop-types";
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
  faGlassWhiskey,
  faChevronDown,
  faChevronRight,
  faMapMarkerAlt,
  faRuler,
  faUsers,
  faTint,
} from "@fortawesome/free-solid-svg-icons";
/**Components */
import { Routes } from "./routes/routes";
import withSettings from 'components/hocs/WithSettings';
/**Translations data */
import es_translations from "./translations/es.json";
import en_translations from "./translations/en.json";
/**Styles */
import "styles/main.scss";

// add font awesome icons to the library in order to import just used icons
library.add(faBars, faQuestion, faCog, faBell, faSignOutAlt, faTh, faEllipsisV, faBolt, faBroadcastTower, faGlassWhiskey, faChevronDown, faChevronRight, faMapMarkerAlt, faRuler, faUsers, faTint);

const routes = Routes();

const App = ({ settings, changeTheme }) => {

  useEffect(() => {
    console.log("language App", settings.locale);
    changeTheme(settings.theme);
  }, [changeTheme, settings]);

  const translations = {
    es: es_translations,
    en: en_translations
  };

  return (
    <IntlProvider key={settings.locale} locale={settings.locale} messages={translations[settings.locale]}>
      <BrowserRouter basename={"/"}>{routes}</BrowserRouter>
    </IntlProvider>
  );
};

App.propTypes = {
  settings: PropTypes.object.isRequired,
  changeTheme: PropTypes.func.isRequired
};

export default withSettings((App));
