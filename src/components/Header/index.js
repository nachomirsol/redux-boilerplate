import React from "react";
import { HeaderWrapper, LogoWrapper } from "./Header";
import { ReactComponent as LogoGoAigua } from 'assets/svg/goaigua-logo.svg';
import Icon from "components/Icon";

const Header = ({ handleSideBar }) => {
  return (
    <HeaderWrapper>
      <div style={{ cursor: "pointer" }} onClick={() => handleSideBar()}>
        <Icon name={"bars"}></Icon>
      </div>
      <LogoWrapper><LogoGoAigua /></LogoWrapper>
      <div>Alarmas y tal</div>
    </HeaderWrapper>
  );
};

export default Header;
