import React from "react";
/*Librarys*/
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import PropTypes from "prop-types";
/* Components */
import Layout from "../Layout";
/* Config */
import { nestedRoutes } from "routes/config";
/* Styles */
import "./leakSearchPage.scss";

// This case we use the layout in the route instead of the component directly
const LeakSearchPage = ({ intl }) => {
  let { path } = useRouteMatch();
  return (
    <div className="leakSearchPage leakSearchPage__wrapper">
      <Switch>
        {nestedRoutes &&
          nestedRoutes[path] &&
          Array.isArray(nestedRoutes[path]) &&
          nestedRoutes[path].map((route, index) => {
            return (
              <Route
                key={index}
                exact={true}
                path={route.path}
                render={props => (
                  <Layout breadcrumbs={route.breadcrumbs}>
                    <route.component intl={intl} {...props} />
                  </Layout>
                )}
              />
            );
          })}
      </Switch>
    </div>
  );
};

LeakSearchPage.propTypes = {
  intl: PropTypes.object.isRequired
};

// This works better in terms of performance using createStructuredSelector and selectors
const mapStateToProps = createStructuredSelector({
  // todoList: makeSelectTodoList()
});

export default connect(mapStateToProps)(injectIntl(LeakSearchPage));