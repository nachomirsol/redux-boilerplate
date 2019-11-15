import React, { useState } from "react";
import PropTypes from "prop-types";
import "./subHeader.scss";

const SubHeader = ({ title, intl, onViewChange }) => {
  const [viewMode, setViewMode] = useState("population");
  return (
    <>
      <div className="subHeader__wrapper">
        <div className="subHeader__title">{title}</div>
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
  title: PropTypes.string.isRequired,
  intl: PropTypes.object.isRequired,
  onViewChange: PropTypes.func.isRequired
};

export default SubHeader;
