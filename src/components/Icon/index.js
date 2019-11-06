import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import customIcons from "./customIcons";

const Icon = ({ name, size, color, custom }) => {
  if (custom) {
    const CustomIcon = customIcons[name];
    return (
      <CustomIcon className="custom-icon" />
    );
  }
  return (
    <FontAwesomeIcon className="icon" icon={name} size={size} color={color}></FontAwesomeIcon>
  );
};

export default Icon;
