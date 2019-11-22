import React from "react";
/**Libraries */
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import PropTypes from "prop-types";
/**Styles */
import "./tabContainer.scss";

const TabContainer = ({ routes, title, url }) => {
  let location = useLocation();
  return (
    <>
      <div className="tabContainer__wrapper">
        <div className="tabContainer__leftGroup">
          <div className="tabContainer__title">{title}</div>
          <div className="tabContainer__tabs">

            {routes.map((route, index) => {
              return (
                route.label && (
                  <Link
                    className={`tabContainer__tab ${
                      route.path === location.pathname ? "selected" : ""
                      }`}
                    key={index}
                    to={route.path}
                  >
                    {console.log(`${url}${route.path}`)}
                    {route.label}
                  </Link>
                )
              );
            })}
          </div>
        </div>
        <div className="tabContainer__rightGroup">
          <span>Visualizar por poblaciones</span>
        </div>
      </div>
    </>
  );
};

TabContainer.propTypes = {
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  title: PropTypes.string.isRequired
};

export default TabContainer;
