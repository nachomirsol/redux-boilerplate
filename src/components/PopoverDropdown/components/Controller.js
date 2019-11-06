import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { PopoverWrapper, PopoverBody, PopoverArrow } from "../PopoverDropdown";

const portalContainer = document.getElementById("another-root");

const PopoverController = props => {
  const { children } = props;
  const ref = useRef(null);
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

  const setPos = ({ left, top, height }) => {
    setStyle({ ...style, left, top: top + height });
  };

  const close = () => {
    setIsOpen(false);
  };

  const open = () => {
    setIsOpen(!isOpen);
  };

  const inputChildren = React.Children.map(children, child => {
    if (child.type.displayName === "Select") {
      return React.cloneElement(child, { open, setPos });
    } else {
      return (
        isOpen &&
        ReactDOM.createPortal(
          <PopoverWrapper
            style={style}
            className="popover"
            onClick={e => e.stopPropagation()}
          >
            <PopoverArrow width="14" height="7">
              <polygon points="0,7 7,0, 14,7"></polygon>
            </PopoverArrow>
            <PopoverBody> {React.cloneElement(child, { ref })}</PopoverBody>
          </PopoverWrapper>,
          portalContainer
        )
      );
    }
  });
  return inputChildren;
};

export default PopoverController;
