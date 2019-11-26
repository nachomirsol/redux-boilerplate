import React, { useState, useEffect } from "react";
/*Librarys*/
import PropTypes from "prop-types";
/* Components */
import FilterPanel from "components/FilterPanel";
import Map from "components/Map";
import Spinner from "components/Spinner";
import StatusLegend from "components/StatusLegend";
import Widget from "components/Widget";
/**Mock Data */
import dataAreas from '../../mockData/areasDataModel.json';
import dataIcons from '../../mockData/assetsDataModel.json';
/**Utils */
import operationStateModel from "./utils/operationStateModel";
/**Styles */
import "./operationState.scss";

const OperationState = ({ intl }) => {
  const [showSpinner, setShowSpinner] = useState(true);

  const [dataIconsState, setDataIcons] = useState(null);
  const [dataAreasState, setDataAreas] = useState(null);

  useEffect(() => {
    createIconsState(dataIcons);
    createAreasState(dataAreas);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  }, []);

  const createIconsState = (data) => {
    setDataIcons(data)
  }

  const createAreasState = (data) => {
    setDataAreas(data)
  }

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
                    {widgetData.hasProps ? (
                      <widgetData.Component
                        {...widgetData.widgetProps}
                      ></widgetData.Component>
                    ) : (
                        <widgetData.Component />
                      )}
                  </Widget>
                );
              })}
            </div>

            <div className="map__container">
              <FilterPanel intl={intl} />
              <StatusLegend />
              <Map dataArea={dataAreasState} dataIcon={dataIconsState}></Map>
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
