import React, {
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
  useRef
} from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../popover.scss";

const portalContainer = document.getElementById("another-root");

const PopoverController = ({ children, place }) => {
  const targetRef = useRef(null);

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

  useLayoutEffect(() => {
    if (targetRef.current) {
      // setTargetWidth(targetRef.current.offsetWidth);
      setPlace(targetRef.current.offsetWidth);
    }
  });

  const setPlace = useCallback(
    targetWidth => {
      switch (place) {
        case "right":
          {
            setStyle(s => ({ ...s, left: s.left + targetWidth / 2 }));
          }
          break;
        case "left":
          {
            setStyle(s => ({ ...s, left: s.left - targetWidth / 2 }));
          }
          break;
        default:
          break;
      }
    },
    [place, setStyle]
  );
  const setPosition = useCallback(
    ({ left, top, height }) => {
      setStyle(s => ({ ...s, left, top: top + height }));
    },
    [setStyle]
  );

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(!isOpen);
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
            style={style}
            onClick={e => e.stopPropagation()}
          >
            <svg className="popover__arrow" width="14" height="7">
              <polygon points="0,7 7,0, 14,7"></polygon>
            </svg>
            <div className="popover__body">
              {React.cloneElement(child, { ref: targetRef })}
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
  ]).isRequired
};

export default PopoverController;
