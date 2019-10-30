import React from "react";
import { WidgetWrapper, WidgetHeader, WidgetContent } from "./Widget";

const Widget = ({ title, children }) => {
  return (
    <WidgetWrapper className="widget" bg="bgGray1">
      <WidgetHeader>
        <div>{title}</div>
        <div> icons </div>
      </WidgetHeader>
      <WidgetContent>{children}</WidgetContent>
    </WidgetWrapper>
  );
};

export default Widget;
