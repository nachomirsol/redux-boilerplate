import React from "react";
import {
  HeaderWrapper,
  LogoWrapper,
  RightHeaderMenuWrapper,
  IconWrapper
} from "./Header";

import { ReactComponent as LogoGoAigua } from "assets/svg/goaigua-logo.svg";
import { UserAvatar } from "components/UserAvatar";
import HeaderIcon from "./components/HeaderIcon";
import Icon from "components/Icon";
import PropTypes from 'prop-types';


const loginPage = { userName: "Mateo" };

const Header = ({ handleSideBar }) => {
  return (
    <HeaderWrapper>
      <IconWrapper
        className="menu-bars"
        onClick={() => handleSideBar()}
      >
        <Icon name="bars" size="lg"></Icon>
      </IconWrapper>

      <LogoWrapper>
        <LogoGoAigua />
      </LogoWrapper>

      <RightHeaderMenuWrapper>
        <HeaderIcon iconName="question">
          <div>
            {" "}
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
          </div>
        </HeaderIcon>

        <HeaderIcon iconName="cog">
          <div>
            {" "}
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
          </div>
        </HeaderIcon>

        <HeaderIcon iconName="bell">
          <div>
            {" "}
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
          </div>
        </HeaderIcon>

        <UserAvatar loginPage={loginPage}></UserAvatar>

        <HeaderIcon iconName="th" gradient={true}>
          <div>
            {" "}
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
          </div>
        </HeaderIcon>

        <svg
          style={{ width: 0, height: 0, position: "absolute" }}
          aria-hidden="true"
          focusable="false"
        >
          <linearGradient
            id="my-cool-gradient"
            x1="0%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor="#319acb" />
            <stop offset="100%" stopColor="#b8dcec" />
          </linearGradient>
        </svg>
      </RightHeaderMenuWrapper>
    </HeaderWrapper>
  );
};

Header.propTypes = {
  handleSideBar: PropTypes.func.isRequired,
}

export default Header;
