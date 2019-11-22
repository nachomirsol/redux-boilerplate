import React from "react";
import { connect } from "react-redux";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";
import injectReducer from "utils/injectReducer";
import makeSelectPageSettings from "./redux/selectors";
import { toggleMenu, toggleSystem, toggleAdmin } from "./redux/actions";
import reducer from "./redux/reducer";

export default function WithPageSettings(WrappedComponent) {
  class WithPageSettings extends React.PureComponent {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  }

  const mapStateToProps = createStructuredSelector({
    pageSettings: makeSelectPageSettings()
  });

  function mapDispatchToProps(dispatch) {
    return {
      onToggleMenu: () => dispatch(toggleMenu()),
      onToggleSystem: () => dispatch(toggleSystem()),
      onToggleAdmin: () => dispatch(toggleAdmin()),
      dispatch
    };
  }

  const withConnect = connect(mapStateToProps, mapDispatchToProps);

  const withReducer = injectReducer({ key: "pageSettings", reducer });

  return compose(withReducer, withConnect)(WithPageSettings);
}
