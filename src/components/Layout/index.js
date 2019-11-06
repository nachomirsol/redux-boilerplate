import React, { useState, useEffect } from "react";
import Header from "components/Header";
import Sidebar from "components/Sidebar";
import PropTypes from "prop-types";
import { ContainerWrapper, Container, Page } from "./Layout";

const Layout = ({ children, history }) => {
  const [expandedSideBar, setExpandedSideBar] = useState(true);
  const checkWindowSize = () => {
    if (window.innerWidth <= 768) {
      setExpandedSideBar(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", checkWindowSize);
    return () => {
      window.removeEventListener("resize", checkWindowSize);
    };
  });
  return (
    <Page>
      <Header
        handleSideBar={() => setExpandedSideBar(!expandedSideBar)}
        history={history}
      />
      <ContainerWrapper>
        <Sidebar expanded={expandedSideBar}></Sidebar>
        <Container>{children}</Container>
      </ContainerWrapper>
    </Page>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  history: PropTypes.object
};

export default Layout;
