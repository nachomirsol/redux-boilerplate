import * as React from "react";

import { Route, Switch } from "react-router-dom";
import HomePage from '../containers/HomePage'

export const Routes = () => (
    <Switch>
        <Route exact={true} path="/" component={HomePage} />
    </Switch>
);
