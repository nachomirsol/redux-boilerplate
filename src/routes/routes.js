import * as React from "react";
/**Libraries */
import { Route, Switch, Redirect } from "react-router-dom";
import PropTypes from "prop-types";
/**Config */
import { routes } from "./config";
import { fakeAuth } from "utils/fakeAuth";
import { LoginPage } from "pages";


// A wrapper for <Route> that redirects to the login
// screen if you're not yet authenticated.
const PrivateRoute = ({ path, exact, Page }) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={props => {
        return fakeAuth().isAuthenticated ? (
          <Page {...props} />
        ) : (
            <Redirect to="/login" />
          );
      }}
    />
  );
};

PrivateRoute.propTypes = {
  path: PropTypes.string.isRequired,
  exact: PropTypes.bool.isRequired,
  Page: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
    PropTypes.object
  ])
};

export const Routes = () => (
  <Switch>
    <Route
      key="login-route"
      path="/login"
      exact={false}
      component={LoginPage}
    />

    {routes &&
      Array.isArray(routes) &&
      routes.map((route, index) => {
        return route.redirect ? (
          <Redirect key={index} from={route.path} to={route.redirectTo} />
        ) : (
            <PrivateRoute
              key={index}
              // route={route}
              path={route.path}
              exact={route.exact}
              Page={route.component}
            />
          );
      })}
  </Switch>
);
