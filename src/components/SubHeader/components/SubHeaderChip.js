import React from "react";
import PropTypes from "prop-types";
import { TooltipController, TooltipTrigger } from "components/Tooltip";
import Icon from "components/Icon";

const SubHeaderChip = ({ iconName, amount, title }) => {
  return (
    <TooltipController place="top">
      <TooltipTrigger>
        <span className="subHeader__chip  icon-wrapper--light">
          <Icon name={iconName}></Icon>
          {amount}
        </span>
      </TooltipTrigger>
      <div>{title}</div>
    </TooltipController>
  );
};

SubHeaderChip.propTypes = {
  iconName: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SubHeaderChip;
