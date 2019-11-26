import React, { useEffect } from "react";
/*Librarys*/
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { injectIntl } from "react-intl";
import { createStructuredSelector } from "reselect";
import { Route, useRouteMatch, Redirect } from "react-router-dom";
/* Components */
import Layout from "../Layout";
import SubHeader from "components/SubHeader";
import Tabs from "components/Tabs";
/**Redux */
import { createHierarchy } from "./redux/actions";
/* Config */
import { nestedRoutes } from "routes/config";
/* Mock data */
/* Styles */
import "./homePage.scss";

// This case we use the layout in the route instead of the component directly
const HomePage = ({ intl, createHierarchy }) => {
  let { path } = useRouteMatch();
  useEffect(() => {
    createHierarchy();
  }, [])
  return (
    <div className="homePage homePage__wrapper">
      {nestedRoutes &&
        nestedRoutes[path] &&
        Array.isArray(nestedRoutes[path]) &&
        nestedRoutes[path].map((route, index) => {
          return route.redirect ? (
            <Redirect key={index} from={route.path} to={route.redirectTo} />
          ) : (
              <Route
                key={index}
                exact={route.exact}
                path={route.path}
                render={props => (
                  <Layout breadcrumbs={route.breadcrumbs}>
                    <SubHeader
                      intl={intl}
                      onViewChange={currentView => console.log(currentView)}
                    />
                    <Tabs intl={intl} routes={nestedRoutes[path]}></Tabs>
                    <route.component intl={intl} {...props} />{" "}
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
const mapStateToProps = (state) => ({
  hierarchy: state.hierarchy.hierarchy
});

function mapDispatchToProps(dispatch) {
  return {
    createHierarchy: () => dispatch(createHierarchy()),
    dispatch
  };
}

// This works better in case of state tree is modified

/*const selectTodoList = (state) => {
    return state.todoList.todoList
}

const mapStateToProps = (state) => ({
    todoList:selectTodoList(state)
})
*/

// This works better in terms of performance using createStructuredSelector and selectors
// const mapStateToProps = createStructuredSelector({
//   // todoList: makeSelectTodoList()
// });

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(HomePage));
