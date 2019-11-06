import React from "react";
import { WidgetWrapper, WidgetHeader, WidgetContent } from "./Widget";
import Icon from "components/Icon";

const Widget = ({ title, children }) => {

  return (
    <WidgetWrapper className="widget" bg="bgGray1">
      <WidgetHeader>
        <div>{title}</div>
        <div className="icons"><Icon name={"ellipsis-v"}></Icon></div>
      </WidgetHeader>
      <WidgetContent>{children}</WidgetContent>
    </WidgetWrapper>
  )
};

export default Widget;
