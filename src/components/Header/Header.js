import React from "react";
import { ReactComponent as LogoGoAigua } from "assets/svg/goaigua-logo.svg";
import { Breadcrumb } from 'components/Breadcrumb';
import UserAvatar from "components/UserAvatar";
import HeaderIcon from "./components/HeaderIcon";
import Icon from "components/Icon";
import PropTypes from 'prop-types';
import './header.scss';


const loginPage = { userName: "Mateo" };

const Header = ({ handleSideBar, breadcrumbs }) => {
  return (
    <div className="header">
      <div className="header__leftMenu">
        <span
          className="icon-wrapper menu-bars"
          onClick={() => handleSideBar()}
        >
          <Icon name="bars" size="lg"></Icon>
        </span>

        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>

      <div className="logo">
        <LogoGoAigua />
      </div>

      <div className="header__rightMenu">
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
      </div>
    </div>
  );
};

Header.propTypes = {
  handleSideBar: PropTypes.func.isRequired,
  breadcrumbs: PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Header;
