import * as React from "react";

import { Route, Switch } from "react-router-dom";
import { URL } from '../utils/const';
import HomePage from '../containers/HomePage';
import Layout from '../components/Layout';
import { MapPage } from '../containers/MapPage';
import PostPage from '../containers/PostPage';
import TextPage from '../containers/TextPage';

export const Routes = () => (
    <Switch>
        <Layout>
            <Route exact={true} path={URL.home} component={HomePage} />
            <Route exact={true} path={URL.posts} component={PostPage} />
            <Route exact={true} path={URL.texts} component={TextPage} />
            <Route exact={true} path={URL.map} component={MapPage} />
        </Layout>
    </Switch>
);
