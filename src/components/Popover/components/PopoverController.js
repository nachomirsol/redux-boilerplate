import React, { useState, useEffect, useCallback } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../popover.scss";

const portalContainer = document.getElementById("another-root");

const PopoverController = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState({
    position: "absolute",
    top: 0,
    left: 0
  });

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("click", close);
    }

    return () => window.removeEventListener("click", close);
  }, [isOpen]);


  const setPos = useCallback(({ left, top, height }) => {
    setStyle( s => ({ ...s, left, top: top + height }));
  }, [setStyle]);

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(!isOpen);
  };

  const inputChildren = React.Children.map(children, child => {
    if (child.type.displayName === "Trigger") {
      return React.cloneElement(child, { open, setPos });
    } else {
      return (
        isOpen &&
        ReactDOM.createPortal(
          <div className="popover__wrapper"
            style={style}
            onClick={e => e.stopPropagation()}
          >
            <svg className="popover__arrow" width="14" height="7">
              <polygon points="0,7 7,0, 14,7"></polygon>
            </svg>
            <div className="popover__body"> {child}</div>
          </div>,
          portalContainer
        )
      );
    }
  });
  return inputChildren;
};

PopoverController.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
};

export default PopoverController;
