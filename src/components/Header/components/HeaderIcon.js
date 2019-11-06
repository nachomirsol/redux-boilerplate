import React from "react";
import { PopoverController, PopoverSelect } from "components/PopoverDropdown";
import { IconWrapper } from "../Header";
import Icon from "components/Icon";

const HeaderIcon = ({ gradient, iconName, children }) => {
  return (
    <PopoverController>
      <PopoverSelect>
        <IconWrapper gradient={gradient}>
          <Icon name={iconName} size="lg"></Icon>
        </IconWrapper>
      </PopoverSelect>
      {children}
    </PopoverController>
  );
};
export default HeaderIcon;
