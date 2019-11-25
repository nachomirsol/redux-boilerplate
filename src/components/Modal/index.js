import * as React from "react";
/**Libraries */
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
/**Styles */
import "./modal.scss";

const modalRoot = document.getElementById("another-root");

const Modal = ({ children }) => {

  return createPortal(<div className="modal">{children}</div>,modalRoot);
};

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default Modal;