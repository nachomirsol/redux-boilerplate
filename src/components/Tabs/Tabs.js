import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import "./tabs.scss";

const Tabs = ({ routes, intl }) => {
  let location = useLocation();
  return (
    <>
      <div className="tabs__wrapper">
        <div className="tabs__tabs">
          {routes.map((route, index) => {
            return (
              route.label && (
                <Link
                  className={`tabs__tab ${
                    route.path === location.pathname ? "selected" : ""
                  }`}
                  key={index}
                  to={route.path}
                >
                  {intl.formatMessage({
                    id: `app.components.Tabs.${route.label}`
                  })}
                </Link>
              )
            );
          })}
        </div>
      </div>
    </>
  );
};

Tabs.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  intl: PropTypes.object.isRequired
};

export default Tabs;
