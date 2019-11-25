import React, { useRef, useEffect, useCallback } from "react";
/**Libraries */
import PropTypes from "prop-types";


const TooltipTrigger = ({ children, open, close, setPosition }) => {
  const reference = useRef(null);

  const updatePostion = useCallback(() => {
    setPosition(reference.current.getBoundingClientRect());
  }, [setPosition]);

  useEffect(() => {
    updatePostion();
  }, [updatePostion]);
  
  return React.cloneElement(children, { onMouseEnter: open, onMouseLeave: close, ref: reference });
};

TooltipTrigger.displayName = "Trigger";
TooltipTrigger.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  setPosition: PropTypes.func,
  open: PropTypes.func,
};

export default TooltipTrigger;
