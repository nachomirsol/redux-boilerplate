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
import "./infrastructuresPage.scss";

// This case we use the layout in the route instead of the component directly
const InfrastructuresPage = ({ intl }) => {
  let { path } = useRouteMatch();
  return (
    <div className="infrastructuresPage infrastructuresPage__wrapper">
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

InfrastructuresPage.propTypes = {
  intl: PropTypes.object.isRequired
};

// This works
/*const mapStateToProps = (state) => ({
    todoList:state.todoList.todoList
})*/

// This works better in case of state tree is modified

/*const selectTodoList = (state) => {
    return state.todoList.todoList
}

const mapStateToProps = (state) => ({
    todoList:selectTodoList(state)
})
*/

// This works better in terms of performance using createStructuredSelector and selectors
const mapStateToProps = createStructuredSelector({
  // todoList: makeSelectTodoList()
});

export default connect(mapStateToProps)(injectIntl(InfrastructuresPage));
