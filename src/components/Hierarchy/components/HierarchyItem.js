import React from "react";
/**Components */
import Icon from "components/Icon";
/**Styles */
import "./hierarchyItem.scss";

const HierarchyItem = ({
  dataInfo,
  icon,
  style,
  onCheckItem,
  onDisplayChildren,
  id,
  checked
}) => {
  return (
    <div className="hierarchy-item">
      {icon && (
        <span onClick={() => onDisplayChildren(id)}>
          <Icon name={icon} />
        </span>
      )}
      <input
        type="checkbox"
        onChange={() => onCheckItem(id)}
        checked={checked}
      />
      <span>{dataInfo.label}</span>
    </div>
  );
};

export default HierarchyItem;
