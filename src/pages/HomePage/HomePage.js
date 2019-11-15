import React from "react";
/*Librarys*/
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { Switch, Route, useRouteMatch } from "react-router-dom";
/* Components */
import Layout from "../Layout";
import TabContainer from "components/TabContainer";
/* Config */
import { nestedRoutes } from "routes/config";
/* Mock data */
/* Styles */
import "./homePage.scss";


// This case we use the layout in the route instead of the component directly
const HomePage = ({ intl }) => {
  let { path, url } = useRouteMatch();
  return (
    <div className="homePage homePage__wrapper">
      {nestedRoutes &&
        nestedRoutes[path] &&
        Array.isArray(nestedRoutes[path]) &&
        nestedRoutes[path].map((route, index) => {
          return (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              render={props => (
                <Layout breadcrumbs={route.breadcrumbs}>
                  <TabContainer
                    title="Toda mi explotación"
                    routes={nestedRoutes[path]}
                    url={path}
                  ></TabContainer>
                  <route.component intl={intl} {...props} />
                </Layout>
              )}
            />
          );
        })}
    </div>
  );
};

HomePage.propTypes = {
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

export default connect(mapStateToProps)(injectIntl(HomePage));
