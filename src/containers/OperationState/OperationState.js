import React, { useState, useEffect } from "react";
/*Librarys*/
import PropTypes from "prop-types";
/* Components */
import Map from "components/Map";
import OverallInfoWidgetContent from "./components/OverallInfoWidgetContent/OverallInfoWidgetContent";
import Spinner from "components/Spinner";
import StatusIndicator from "components/StatusIndicator";
import Widget from "components/Widget";
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
              <Widget
                title={intl.formatMessage({
                  id: "app.components.Widget.Header.Title.Infraestructures"
                })}
              >
                {/*<Chart type={'pie'} title={''} subtitle={''} data={chartData} />*/}
                <StatusIndicator />
              </Widget>

              <Widget
                title={intl.formatMessage({
                  id: "app.components.Widget.Header.Title.Operation"
                })}
              >
                <OverallInfoWidgetContent
                  icons={[
                    { name: "broadcast-tower", text: "Comunicación" },
                    { name: "cog", text: "fugas" }
                  ]}
                  minRange={""}
                  maxRange={""}
                />
                {/** Consider this icosn data inside a config file */}
              </Widget>

              <Widget
                title={intl.formatMessage({
                  id: "app.components.Widget.Header.Title.WaterQuality"
                })}
              >


                <OverallInfoWidgetContent
                  icons={[
                    { name: "", text: "-" },
                    { name: "", text: "-" }
                  ]}
                  minRange={"0.45"}
                  maxRange={"0.96"}
                />
                {/** Consider this icosn data inside a config file */}
              </Widget>
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
