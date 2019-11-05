import React from "react";
import { compose } from "redux";
import { injectIntl } from "react-intl";
import { withRouter } from "react-router-dom";
import { PopoverController, PopoverSelect } from "components/PopoverDropdown";
import Icon from "components/Icon";
import "./avatar.scss";

export const UserAvatar = props => {

  const handleClickLogout = () => {
    console.log("log out");
    // localStorage.removeItem("userToken");
    // window.location.href = `/login`;
  };
  return (
    <div className={"c-user-avatar c-user-avatar--fix"}>
      <PopoverController>
        <PopoverSelect>
          <div className="c-user-avatar__cont">
            <div className="c-user-avatar__cont-photo">
              <img
                className="c-user-avatar__photo"
                src={require(`./avatar-unknow.jpg`)}
                alt=""
              />
            </div>
            <div className="user-name">
              {props.loginPage && props.loginPage.userName}
            </div>
          </div>
        </PopoverSelect>
        <div className="user-menu" onClick={() => handleClickLogout()}>
          <Icon name="sign-out-alt"></Icon>
          <span>Logout</span>
        </div>
      </PopoverController>
    </div>
  );
};

UserAvatar.propTypes = {};

UserAvatar.defaultProps = {};

export default compose(
  withRouter,
  injectIntl
)(UserAvatar);
