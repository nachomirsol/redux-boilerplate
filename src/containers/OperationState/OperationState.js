import React, { useState, useEffect } from "react";
/*Librarys*/
import PropTypes from "prop-types";
/* Components */
import FilterPanel from "components/FilterPanel";
import Map from "components/Map";
import Spinner from "components/Spinner";
import StatusLegend from "components/StatusLegend";
import Widget from "components/Widget";
/**Redux */
import { connect } from "react-redux";
import {
  checkAssets,
  changeFilterState
} from "../../pages/HomePage/redux/actions";
/**Mock Data */
import userPermissions from "mockData/userPermissions.json";
/**Utils */
import operationStateModel from "./utils/operationStateModel";
/**Styles */
import "./operationState.scss";

const OperationState = ({
  intl,
  mapAreas,
  iconAssets,
  selectedMapAreas,
  selectedIconAssets,
  checkAssets,
  filters
}) => {
  const [showSpinner, setShowSpinner] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  }, []);

  const userHasPermission = widgetData => {
    const currentUser = localStorage.getItem("userName");
    if (userPermissions && userPermissions[currentUser]) {
      return userPermissions[currentUser].opertationStateWidgets.includes(
        widgetData.name
      );
    }
    return false;
  };

  return (
    <div className="operationState operationState__wrapper">
      {showSpinner ? (
        <Spinner message="Loading"></Spinner>
      ) : (
        <>
          <div className="widget__container">
            {operationStateModel.map((widgetData, index) => {
              return userHasPermission(widgetData) ? (
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
              ) : null;
            })}
          </div>

          <div className="map__container">
            <FilterPanel
              intl={intl}
              filters={filters}
              changeFilterState={changeFilterState}
              onCheckAsset={(variableName, value, isChecked) =>
                checkAssets(
                  filters,
                  mapAreas,
                  iconAssets,
                  variableName,
                  value,
                  isChecked
                )
              }
            />
            <StatusLegend />
            <Map
              dataArea={selectedMapAreas}
              dataIcon={selectedIconAssets}
            ></Map>
          </div>
        </>
      )}
    </div>
  );
};

const mapStateToProps = state => ({
  selectedMapAreas: state.hierarchy.selectedMapAreas,
  selectedIconAssets: state.hierarchy.selectedIconAssets,
  iconAssets: state.hierarchy.iconAssets,
  mapAreas: state.hierarchy.mapAreas,
  filters: state.hierarchy.filters
});
const mapDispatchToProps = dispatch => {
  return {
    checkAssets: (filters, mapAreas, iconAssets, variableName, value, isChecked) =>
      dispatch(
        checkAssets(filters, mapAreas, iconAssets, variableName, value, isChecked)
      ),
    changeFilterState: () => dispatch(changeFilterState()),
    dispatch
  };
};

OperationState.propTypes = {
  intl: PropTypes.object.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(OperationState);
