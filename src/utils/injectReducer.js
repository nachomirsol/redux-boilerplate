import React, { useEffect, useState } from "react";
import { ReactReduxContext } from "react-redux";
import hoistNonReactStatics from "hoist-non-react-statics";

import getInjectors from "./reducerInjectors";

/**
 * Dynamically injects a reducer
 *
 * @param {string} key A key of the reducer
 * @param {function} reducer A reducer that will be injected
 *
 */
export default ({ key, reducer }) => WrappedComponent => {
  const ReducerInjector = props => {
    const [store, setStore] = useState(null);
    useEffect(() => {
      if (store) {
        const { injectReducer } = getInjectors(store);
        injectReducer(key, reducer);
      }
    }, [store]);

    return (
      <ReactReduxContext.Consumer>
        {({ store }) => {
          setStore(store);
          return <WrappedComponent {...props} />;
        }}
      </ReactReduxContext.Consumer>
    );
  };

  ReducerInjector.displayName = `withReducer(${WrappedComponent.displayName ||
    WrappedComponent.name ||
    "Component"})`;

  return hoistNonReactStatics(ReducerInjector, WrappedComponent);
};
