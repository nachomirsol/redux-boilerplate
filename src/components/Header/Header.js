import React from "react";
import { ReactComponent as LogoGoAigua } from "assets/svg/goaigua-logo.svg";
import { Breadcrumb } from 'components/Breadcrumb';
import { injectIntl } from "react-intl";
import UserAvatar from "components/UserAvatar";
import HeaderTriggerIcon from "./components/HeaderTriggerIcon";
import Icon from "components/Icon";
import PropTypes from 'prop-types';
import './header.scss';


const loginPage = { userName: "Mateo" };

const Header = ({ handleSideBar, breadcrumbs, intl }) => {
  return (
    <div className="header">
      <div className="header__leftMenu">
        <span
          className="icon-wrapper menu-bars"
          onClick={() => handleSideBar()}
        >
           {/* <HeaderTriggerIcon iconName="bars" place="right">
          <div>
            {" "}
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
          </div>
        </HeaderTriggerIcon> */}
          <Icon name="bars" size="lg"></Icon>
        </span>

        <Breadcrumb breadcrumbs={breadcrumbs} intl={intl} />
      </div>

      <div className="logo">
        <LogoGoAigua />
      </div>

      <div className="header__rightMenu">
        <HeaderTriggerIcon iconName="question">
          <div>
            {" "}
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
          </div>
        </HeaderTriggerIcon>

        <HeaderTriggerIcon iconName="cog">
          <div>
            {" "}
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
          </div>
        </HeaderTriggerIcon>

        <HeaderTriggerIcon iconName="bell">
          <div>
            {" "}
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
          </div>
        </HeaderTriggerIcon>

        <UserAvatar loginPage={loginPage}></UserAvatar>

        <HeaderTriggerIcon iconName="th" gradient={true} place="left">
          <div>
            {" "}
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
            <p>fgsfdsfdsfds</p>
          </div>
        </HeaderTriggerIcon>

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

export default injectIntl(Header);
