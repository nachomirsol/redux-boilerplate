import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import customIcons from "./customIcons";
import PropTypes from "prop-types";

const Icon = ({ name, size, color, custom }) => {
  if (name) {
    if (custom) {
      const CustomIcon = customIcons[name];
      return CustomIcon && <CustomIcon className="custom-icon" />;
    }
    return (
      <FontAwesomeIcon
        className="icon"
        icon={name}
        size={size}
        color={color}
      ></FontAwesomeIcon>
    );
  }
  return null;
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  size: PropTypes.string,
  color: PropTypes.string,
  custom: PropTypes.bool
};

export default Icon;
