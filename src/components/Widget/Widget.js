import React, { useState } from "react";
/**Libraries */
import PropTypes from "prop-types";
/**Components */
import Icon from "components/Icon";
import Modal from "../Modal";
/**Styles */
import "./widget.scss";

const Widget = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);
  return isOpen ? (
    <Modal class={"overlay"}>
      <div className={"popup"}>
        <h3>{"BUUUHH"}</h3>
        <div className={"close"} onClick={() => setIsOpen(false)}>
          &times;
        </div>
      </div>
    </Modal>
  ) : (
      <div className="widget widget__wrapper" bg="bgGray1">
        <div className="widget__header">
          <div>{title}</div>
          <div className="icons" onClick={() => setIsOpen(true)}>
            <Icon name={"ellipsis-v"}></Icon>
          </div>
        </div>
        <div className="widget__content">{children}</div>
      </div>
    );
};

Widget.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
}

export default Widget;
