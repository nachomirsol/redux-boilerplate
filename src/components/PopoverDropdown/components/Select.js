import React, { useRef, useEffect, useCallback } from "react";
import PropTypes from "prop-types";


const PopoverSelect = ({ setPos, children, open }) => {
  const reference = useRef(null);

  const updatePostion = useCallback(() => {
      setPos(reference.current.getBoundingClientRect());
    }, [setPos]);

  useEffect(() => {
    updatePostion();
  }, [updatePostion]);

  useEffect(() => {
    window.addEventListener("resize", updatePostion);
    return () => {
      window.removeEventListener("resize", updatePostion);
    };
  });

  return React.cloneElement(children, { onClick: open, ref: reference });
};

PopoverSelect.displayName = "Select";
PopoverSelect.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  setPos: PropTypes.func,
  open: PropTypes.func,
};

export default PopoverSelect;
