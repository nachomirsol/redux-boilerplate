import React, { useState, useEffect, useCallback } from "react";
/**Libraries */
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
/**Styles */
import "../popover.scss";

const portalContainer = document.getElementById("another-root");

const PopoverController = ({
  children,
  place,
  centeredInRelationWithTrigger
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState({
    position: "absolute",
    top: 0,
    left: 0
  });
  const [offsetStyle, setOffsetStyle] = useState(null);

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(!isOpen);
  };

  const setPosition = useCallback(
    ({ left, top, height, width }) => {
      if (centeredInRelationWithTrigger) {
        setStyle(s => ({ ...s, left: left + width / 2, top: top + height }));
      } else {
        setStyle(s => ({ ...s, left, top: top + height }));
      }
    },
    [setStyle, centeredInRelationWithTrigger]
  );

  const measuredRef = useCallback(
    node => {
      if (node !== null) {
        const targetWidth = node.getBoundingClientRect().width;
        switch (place) {
          case "left":
            setOffsetStyle({ ...style, left: style.left - targetWidth / 2 });
            break;
          case "right":
            setOffsetStyle({ ...style, left: style.left + targetWidth / 2 });
            break;
          default:
            break;
        }
      }
    },
    [style, place]
  );

  useEffect(() => {
    if (isOpen) {
      window.addEventListener("mouseup", close);
    }
    return () => window.removeEventListener("mouseup", close);
  }, [isOpen]);

  const getArrowPosition = () => {
    switch (place) {
      case "left":
        return { left: "90%" };
      case "right":
        return { left: "0%" };
      default:
        break;
    }
  };

  const inputChildren = React.Children.map(children, child => {
    if (child.type.displayName === "Trigger") {
      return React.cloneElement(child, { open, setPosition });
    } else {
      return (
        isOpen &&
        ReactDOM.createPortal(
          <div
            className="popover__wrapper"
            style={offsetStyle ? offsetStyle : style}
            onMouseUp={e => e.stopPropagation()}
          >
            <svg
              className="popover__arrow"
              width="14"
              height="7"
              style={getArrowPosition()}
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
  centeredInRelationWithTrigger: PropTypes.bool
};

export default PopoverController;
