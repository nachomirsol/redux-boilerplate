import React, { useState, useEffect, useCallback } from "react";
/**Libraries */
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
/**Utils */
import { getPopoverPosition } from '../utils/popoverPosition';
/**Styles */
import "../popover.scss";

const portalContainer = document.getElementById("another-root");

const PopoverController = ({
  children,
  place,
  offCenter,
  fullHeight,
  reloadPosition,
  handleIsOpen
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState({
    position: "absolute",
    top: 0,
    left: 0
  });
  const [offsetStyle, setOffsetStyle] = useState(null);

  const open = () => {
    // This setTimeot adds the setIsOpen function call at the end of the JS queue, IDK handle the cleaning function to prevent it from running after this function
    setTimeout(() => {
      setIsOpen(!isOpen);
      handleIsOpen && handleIsOpen(!isOpen);
    });
  };

  useEffect(() => {
    const close = () => {
      setIsOpen(false);
      handleIsOpen && handleIsOpen(!false);
    };
    if (isOpen && !fullHeight) {
      window.addEventListener("click", close);
    }
    return () => window.removeEventListener("click", close);
  }, [isOpen, fullHeight, handleIsOpen]);

  const setPosition = useCallback(
    triggerPosition => {
      const popoverPosition = getPopoverPosition(
        triggerPosition,
        place,
        offCenter
      );
      setStyle(s => ({ ...s, ...popoverPosition }));
    },
    [setStyle, offCenter, reloadPosition, place]
  );

  const measuredRef = useCallback(
    node => {
      if (node !== null) {
        const targetWidth = node.getBoundingClientRect().width;
        switch (place) {
          case "top-left":
          case "bottom-left":
            setOffsetStyle({ ...style, left: style.left - targetWidth / 2 });
            break;
          case "top-right":
          case "bottom-right":
            setOffsetStyle({ ...style, left: style.left + targetWidth / 2 });
            break;
          default:
            break;
        }
      }
    },
    [style, place]
  );

  const inputChildren = React.Children.map(children, child => {
    if (child.type.displayName === "Trigger") {
      return React.cloneElement(child, { open, setPosition });
    } else {
      return (
        isOpen &&
        ReactDOM.createPortal(
          <div
            className={`popover__wrapper popover__wrapper--${place} ${
              fullHeight ? "popover__wrapper--full-height" : ""
            }`}
            style={offsetStyle ? offsetStyle : style}
            onClick={e => e.stopPropagation()}
          >
            <svg
              className={`popover__arrow popover__arrow--${place}`}
              width="14"
              height="7"
              style={fullHeight ? { top: style.top } : {}}
            >
              <polygon points="0,7 7,0, 14,7"></polygon>
            </svg>
            <div className="popover__body">
              {React.cloneElement(child, { ref: measuredRef })}
            </div>
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
  place: PropTypes.string,
  offCenter: PropTypes.bool
};

export default PopoverController;
