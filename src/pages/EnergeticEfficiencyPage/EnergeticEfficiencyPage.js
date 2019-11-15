import React from "react";
/*Librarys*/
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { Switch, Route, useRouteMatch } from "react-router-dom";
/* Components */
import Layout from "../Layout";
/* Config */
import { nestedRoutes } from "routes/config";
/* Mock data */
/* Styles */
import "./energeticEfficiencyPage.scss";

// This case we use the layout in the route instead of the component directly
const EnergeticEfficiencyPage = ({ intl }) => {
  let { path } = useRouteMatch();
  return (
    <div className="energeticEfficiencyPage energeticEfficiencyPage__wrapper">
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

EnergeticEfficiencyPage.propTypes = {
  intl: PropTypes.object.isRequired
};

// This works better in terms of performance using createStructuredSelector and selectors
const mapStateToProps = createStructuredSelector({
  // todoList: makeSelectTodoList()
});

export default connect(mapStateToProps)(injectIntl(EnergeticEfficiencyPage));