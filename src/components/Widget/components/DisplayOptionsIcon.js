import React from "react";
import { PopoverController, PopoverSelect } from "components/PopoverDropdown";
import Icon from "components/Icon";

const DisplayOptionsIcon = ({ iconName, children }) => {
  return (
    <PopoverController>
      <PopoverSelect>
          <Icon name={iconName} size="lg"></Icon>
      </PopoverSelect>
      {children}
    </PopoverController>
  );
};
export default DisplayOptionsIcon;