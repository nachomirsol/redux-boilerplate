import React, { useState, useEffect } from "react";
/*Librarys*/
import PropTypes from "prop-types";
/* Components */
import Map from "components/Map";
import Spinner from "components/Spinner";
import Widget from "components/Widget";
/**Utils */
import operationStateModel from "./utils/operationStateModel";
/**Styles */
import "./operationState.scss";

const OperationState = ({ intl }) => {
  const [showSpinner, setShowSpinner] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  }, []);

  return (
    <div className="operationState operationState__wrapper">
      {showSpinner ? (
        <Spinner message="Loading"></Spinner>
      ) : (
        <>
          <div className="widget__container">
            {operationStateModel.map((widgetData, index) => {
              return (
                <Widget
                  key={index}
                  title={intl.formatMessage({ id: widgetData.title })}
                >
                  {widgetData.hasPros ? (
                    <widgetData.Component
                      {...widgetData.widgetProps}
                    ></widgetData.Component>
                  ) : (
                    <widgetData.Component/>
                  )}
                </Widget>
              );
            })}
          </div>

          <div className="map__container">
            <Map></Map>
          </div>
        </>
      )}
    </div>
  );
};

OperationState.propTypes = {
  intl: PropTypes.object.isRequired
};
export default OperationState;
