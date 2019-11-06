import * as React from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import PropTypes from "prop-types";
import "./modal.scss";

const modalRoot = document.getElementById("another-root");

const Modal = ({ children }) => {
    const elRef = useRef(null);
    if (!elRef.current) {

        elRef.current = document.createElement("div");
    }

    useEffect(() => {

        modalRoot.appendChild(elRef.current);

        return () => modalRoot.removeChild(elRef.current);
    }, []);

    return createPortal(<div>{children}</div>, elRef.current);
};

Modal.propTypes = {
    children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
    ]).isRequired,
  };

export default Modal;