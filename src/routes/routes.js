import * as React from "react";

import { Route, Switch } from "react-router-dom";
import { URL } from '../utils/const';
import HomePage from '../containers/HomePage';
import PostPage from '../containers/PostPage';

export const Routes = () => (
    <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path={URL.posts} component={PostPage} />
    </Switch>
);
