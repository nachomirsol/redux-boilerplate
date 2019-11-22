import * as React from "react";
import { createPortal } from "react-dom";
/**Libraries */
import PropTypes from "prop-types";
/**Styles */
import "./alert.scss";

const alertRoot = document.getElementById("another-root");

const Alert = ({ showAlert, type, message }) => {
  return showAlert && createPortal(<div className={`alert alert--${type}`}>{message}</div>, alertRoot);
};

Alert.propTypes = {
    showAlert: PropTypes.bool.isRequired,
    type: PropTypes.string.isRequired,
    message: PropTypes.string.isRequired,
};

export default Alert;