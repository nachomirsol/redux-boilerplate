import React from "react";
/**Libraries */
import { injectIntl } from "react-intl";
import { useHistory  } from "react-router-dom";
import PropTypes from "prop-types";
/**Components */
import { PopoverController, PopoverTrigger } from "components/Popover";
import Icon from "components/Icon";
/**Assets */
import avatarUnknown from "assets/images/avatar-unknow.jpg";
/**Styles */
import "./userAvatar.scss";

export const UserAvatar = ({ loginData }) => {
  const history = useHistory();
  const avatarName = localStorage.getItem("userName");

  const handleClickLogout = () => {
    localStorage.removeItem("userName");
    history.push('/login');
  };
  return (
    <PopoverController>
      <PopoverTrigger>
        <div className="user-avatar__wrapper">
          <div className="user-avatar__photo-container">
            <img className="user-avatar__photo" src={avatarUnknown} alt="" />
          </div>
          <div className="user-avatar__name">
            {avatarName ? avatarName : loginData && loginData.userName}
          </div>
        </div>
      </PopoverTrigger>
      <div
        className="user-avatar__dropdown"
        onClick={() => handleClickLogout()}
      >
        <Icon name="sign-out-alt"></Icon>
        <span>Logout</span>
      </div>
    </PopoverController>
  );
};

UserAvatar.propTypes = {
  loginData: PropTypes.object.isRequired
};

UserAvatar.defaultProps = {};

export default injectIntl(UserAvatar);
