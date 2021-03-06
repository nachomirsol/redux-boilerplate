import React from "react";
/**Libraries */
import PropTypes from 'prop-types';
/**Components */
import { Breadcrumb } from 'components/Breadcrumb';
import { injectIntl } from "react-intl";
import HeaderTriggerIcon from "./components/HeaderTriggerIcon";
import Icon from "components/Icon";
import Settings from "components/Settings";
import UserAvatar from "components/UserAvatar";
/**Assets */
import { ReactComponent as LogoGoAigua } from "assets/svg/goaigua-logo.svg";
/**Styles */
import './header.scss';


const loginData = { userName: "Mateo" };

const Header = ({ handleSideBar, breadcrumbs, intl }) => {
  return (
    <div className="header">
      <div className="header__leftMenu">
        <span
          className="icon-wrapper menu-bars"
          onClick={() => handleSideBar()}
        >

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
          <div >
            {" "}
            <Settings />
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

        <UserAvatar loginData={loginData}></UserAvatar>

        <HeaderTriggerIcon iconName="th" gradient={true} place="bottom-left">
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
  intl: PropTypes.object.isRequired,
}

export default injectIntl(Header);
