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
import { connect } from 'react-redux';
import { checkAssets } from '../../pages/HomePage/redux/actions';
/**Mock Data */
import dataIcons from 'mockData/assetsDataModel.json';
import userPermissions from 'mockData/userPermissions.json';
/**Services */
import { searchHierarchyItem } from 'services/hierachyService';

/**Utils */
import operationStateModel from "./utils/operationStateModel";
/**Styles */
import "./operationState.scss";

const OperationState = ({ intl, mapAreas, iconAssets, hierarchy, checkAssets }) => {

  const [showSpinner, setShowSpinner] = useState(true);
  const [dataIconsState, setDataIcons] = useState(null);

  useEffect(() => {
    createIconsState(dataIcons);
  }, [])

  useEffect(() => {
    setTimeout(() => {
      setShowSpinner(false);
    }, 1000);
  }, []);

  const createIconsState = (data) => {
    setDataIcons(data)
  }

  const checkAsset = (id, name) => {
    let assets = [...iconAssets];
    assets = assets.map((item) => {
      if (item.assetName === name) {
        item.selected = !item.selected
      }
      return item
    })
    setDataIcons(assets)

  }

  const checkAlertStatus = (id, status) => {
    let assets = [...iconAssets];
    assets = assets.map((item) => {
      if (item.state === status) {
        item.selected = !item.selected
      }
      return item
    })
    setDataIcons(assets)
  }

  const userHasPermission = (widgetData) => {
    const currentUser = localStorage.getItem("userName");
    if (userPermissions && userPermissions[currentUser]) {
      return userPermissions[currentUser].opertationStateWidgets.includes(widgetData.name);
    }
    return false;
  }

  const areasSelected = () => {
    return mapAreas.features.filter(item => {
      const element = searchHierarchyItem(hierarchy, item.properties.dmaId);
      if (element && element.checked) {
        return element;
      }
      return null;
    })
  }

  const iconsSelected = () => {
    return iconAssets.filter(item => {
      const element = searchHierarchyItem(hierarchy, item.dmaId);
      if (element && element.checked && item.selected) {
        return element;
      }
      return null;
    })
  }



  return (
    <div className="operationState operationState__wrapper">
      {showSpinner ? (
        <Spinner message="Loading"></Spinner>
      ) : (
          <>
            <div className="widget__container">
              {operationStateModel.map((widgetData, index) => {
                return userHasPermission(widgetData) ?
                  (
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
              <FilterPanel intl={intl} onCheckAsset={checkAssets} onCheckAlertStatus={checkAlertStatus} />
              <StatusLegend />
              <Map dataArea={areasSelected()} dataIcon={iconsSelected()}></Map>
            </div>
          </>
        )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkAssets: () => dispatch(checkAssets()),
    dispatch
  };
}

const mapStateToProps = (state) => ({
  hierarchy: state.hierarchy.hierarchy,
  mapAreas: state.hierarchy.mapAreas,
  iconAssets: state.hierarchy.iconAssets
})


OperationState.propTypes = {
  intl: PropTypes.object.isRequired
};
export default connect(mapStateToProps, mapDispatchToProps)(OperationState);
