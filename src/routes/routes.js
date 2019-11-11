import * as React from "react";

import { Route, Switch } from "react-router-dom";
import Layout from "components/Layout";
import routes from "./config";

export const Routes = () => (
  <Switch>
    {routes &&
      Array.isArray(routes) &&
      routes.map((route, index) => {
        return (
          <Route
            key={index}
            exact={true}
            path={route.path}
            render={props => (
              <Layout breadcrumbs={route.breadcrumbs}>
                <route.component {...props} />
              </Layout>
            )}
          />
        );
      })}
  </Switch>
);
