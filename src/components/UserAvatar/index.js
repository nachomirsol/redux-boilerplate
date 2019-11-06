import React from "react";
import { compose } from "redux";
import { injectIntl } from "react-intl";
import { withRouter } from "react-router-dom";
import { PopoverController, PopoverSelect } from "components/PopoverDropdown";
import PropTypes from "prop-types";
import Icon from "components/Icon";
import {
  UserAvatarWrapper,
  UserAvatarPhotoContainer,
  UserAvatarPhoto,
  UserAvatarName,
  UserAvatarDropdown
} from './UserAvatar';
import avatarUnknown from 'assets/images/avatar-unknow.jpg';

export const UserAvatar = props => {

  const handleClickLogout = () => {
    console.log("log out");
    // localStorage.removeItem("userToken");
    // window.location.href = `/login`;
  };
  return (
      <PopoverController>
        <PopoverSelect>
          <UserAvatarWrapper>
            <UserAvatarPhotoContainer>
              <UserAvatarPhoto
                src={avatarUnknown}
                alt=""
              />
            </UserAvatarPhotoContainer>
            <UserAvatarName>
              {props.loginPage && props.loginPage.userName}
            </UserAvatarName>
          </UserAvatarWrapper>
        </PopoverSelect>
        <UserAvatarDropdown onClick={() => handleClickLogout()}>
          <Icon name="sign-out-alt"></Icon>
          <label>Logout</label>
        </UserAvatarDropdown>
      </PopoverController>
  );
};

UserAvatar.propTypes = {
  loginPage: PropTypes.object.isRequired,
};

UserAvatar.defaultProps = {};

export default compose(
  withRouter,
  injectIntl
)(UserAvatar);
