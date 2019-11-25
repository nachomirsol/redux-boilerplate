import React, { useState } from "react";
import PropTypes from "prop-types";
import "./subHeader.scss";
import SubHeaderChip from "./components/SubHeaderChip";

const SubHeader = ({ intl, onViewChange }) => {
  const [viewMode, setViewMode] = useState("population");
  return (
    <>
      <div className="subHeader__wrapper">
        <div className="subHeader__title">
          <span>
            {intl.formatMessage({
              id: "app.components.SubHeader.Title"
            })}
          </span>
          <SubHeaderChip
            iconName="ruler"
            title={intl.formatMessage({
              id: "app.components.SubHeader.NetLength"
            })}
            amount="23KM"
          ></SubHeaderChip>
          <SubHeaderChip
            iconName="users"
            title={intl.formatMessage({
              id: "app.components.SubHeader.SupplyPoints"
            })}
            amount="12234"
          ></SubHeaderChip>
          <SubHeaderChip
            iconName="tint"
            title={intl.formatMessage({
              id: "app.components.SubHeader.Connections"
            })}
            amount="3123"
          ></SubHeaderChip>
        </div>
        <div className="subHeader__toggle-buttons">
          <button
            className={`subHeader-single-toggle-button ${
              viewMode === "population" ? "active" : ""
            }`}
            onClick={() => {
              setViewMode("population");
              onViewChange("population");
            }}
          >
            {intl.formatMessage({
              id: "app.components.SubHeader.Population"
            })}
          </button>
          <button
            className={`subHeader-single-toggle-button ${
              viewMode === "alarms" ? "active" : ""
            }`}
            onClick={() => {
              setViewMode("alarms");
              onViewChange("alarms");
            }}
          >
            {intl.formatMessage({
              id: "app.components.SubHeader.Alarms"
            })}
          </button>
        </div>
      </div>
    </>
  );
};

SubHeader.propTypes = {
  intl: PropTypes.object.isRequired,
  onViewChange: PropTypes.func.isRequired
};

export default SubHeader;
