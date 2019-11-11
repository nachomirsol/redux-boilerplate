import React from "react";
import { PopoverController, PopoverTrigger } from "components/Popover";
import Icon from "components/Icon";
import PropTypes from 'prop-types';


const HeaderIcon = ({ gradient, iconName, children }) => {
  return (
    <PopoverController>
      <PopoverTrigger>
        <span className={`icon-wrapper ${gradient ? 'gradient' : ''}`}>
          <Icon  name={iconName} size="lg"></Icon>
        </span>
      </PopoverTrigger>
      {children}
    </PopoverController>
  );
};

HeaderIcon.propTypes = {
  gradient: PropTypes.bool,
  iconName: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}

export default HeaderIcon;
