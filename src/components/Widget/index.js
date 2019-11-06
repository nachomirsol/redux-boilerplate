import React, { useState } from "react";
import { WidgetWrapper, WidgetHeader, WidgetContent } from "./Widget";
import Icon from "components/Icon";
import Modal from '../Modal'

const Widget = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    isOpen ? (<Modal class={"overlay"}>
      <div className={"popup"}>
        <h3>{"BUUUHH"}</h3>
        <div
          className={"close"}
          onClick={() => (setIsOpen(false))}
        >
          &times;
    </div>
      </div>
    </Modal>) : (
        <WidgetWrapper className="widget" bg="bgGray1">
          <WidgetHeader>
            <div>{title}</div>
            <div className="icons" onClick={() => setIsOpen(true)}><Icon name={"ellipsis-v"}></Icon></div>
          </WidgetHeader>
          <WidgetContent>{children}</WidgetContent>
        </WidgetWrapper>
      )


  );
};

export default Widget;
