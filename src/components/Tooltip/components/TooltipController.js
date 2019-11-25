import React, { useState, useCallback } from "react";
/**Libraries */
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
/**Utils */
import { getTooltipPosition } from '../utils/tooltipPosition';
/**Styles */
import "../tooltip.scss";

const portalContainer = document.getElementById("another-root");

const TooltipController = ({
  children,
  place,
  offCenter,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [style, setStyle] = useState({
    position: "absolute",
    top: 0,
    left: 0
  });
  const [offsetStyle, setOffsetStyle] = useState(null);

  const open = () => {
      setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
  };

  const setPosition = useCallback(
    triggerPosition => {
      const tooltipPosition = getTooltipPosition(
        triggerPosition,
        place,
        offCenter
      );
      setStyle(s => ({ ...s, ...tooltipPosition }));
    },
    [setStyle, offCenter, place]
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
      return React.cloneElement(child, { open, close, setPosition });
    } else {
      return (
        isOpen &&
        ReactDOM.createPortal(
          <div
            className={`tooltip__wrapper tooltip__wrapper--${place}`}
            style={offsetStyle ? offsetStyle : style}
            onMouseEnter={e => e.stopPropagation()}
          >
            <svg
              className={`tooltip__arrow tooltip__arrow--${place}`}
              width="14"
              height="7"
            >
              <polygon points="0,7 7,0, 14,7"></polygon>
            </svg>
            <div className="tooltip__body">
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

TooltipController.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  place: PropTypes.string,
  offCenter: PropTypes.bool
};

export default TooltipController;
