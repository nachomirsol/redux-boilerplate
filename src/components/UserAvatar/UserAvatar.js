import React from "react";
/**Libraries */
import { compose } from "redux";
import { injectIntl } from "react-intl";
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
/**Components */
import { PopoverController, PopoverTrigger } from "components/Popover";
import Icon from "components/Icon";
/**Assets */
import avatarUnknown from 'assets/images/avatar-unknow.jpg';
/**Styles */
import "./userAvatar.scss";

export const UserAvatar = ({ loginData }) => {

  const handleClickLogout = () => {
    console.log("log out");
    // localStorage.removeItem("userToken");
    // window.location.href = `/login`;
  };
  return (
      <PopoverController>
        <PopoverTrigger>
          <div className="user-avatar__wrapper">
            <div className="user-avatar__photo-container">
              <img className="user-avatar__photo"
                src={avatarUnknown}
                alt=""
              />
            </div>
            <div className="user-avatar__name">
              {loginData && loginData.userName}
          </div>
        </div>
      </PopoverTrigger>
      <div className="user-avatar__dropdown" onClick={() => handleClickLogout()}>
        <Icon name="sign-out-alt"></Icon>
        <label>Logout</label>
      </div>
    </PopoverController>
  );
};

UserAvatar.propTypes = {
  loginData: PropTypes.object.isRequired,
};

UserAvatar.defaultProps = {};

export default compose(
  withRouter,
  injectIntl
)(UserAvatar);
