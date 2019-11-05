import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconWrapper } from "./Icon";
import customIcons from "./customIcons";

const Icon = ({ name, size, color, custom }) => {
  if (custom) {
    const CustomIcon = customIcons[name];
    return (
      <IconWrapper>
        <CustomIcon className="custom-icon" />
      </IconWrapper>
    );
  }
  return (
    <FontAwesomeIcon icon={name} size={size} color={color}></FontAwesomeIcon>
  );
};

export default Icon;
