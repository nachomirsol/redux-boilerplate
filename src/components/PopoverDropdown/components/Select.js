import React, { useRef, useEffect } from "react";

const PopoverSelect = ({ setPos, children, open }) => {
  const reference = useRef(null);
  const updatePostion = () => setPos(reference.current.getBoundingClientRect());

  useEffect(() => {
    updatePostion();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", updatePostion);
    return () => {
      window.removeEventListener("resize", updatePostion);
    };
  });

  return React.cloneElement(children, { onClick: open, ref: reference });
};

PopoverSelect.displayName = "Select";

export default PopoverSelect;
