import * as React from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { routes } from "./config";

export const Routes = () => (
  <Switch>
    {routes &&
      Array.isArray(routes) &&
      routes.map((route, index) => {
        return (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            render={props => (
                <route.component {...props} />
            )}
          />
        );
      })}
  </Switch>
);
