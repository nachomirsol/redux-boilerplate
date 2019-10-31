import React, { useState } from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { ContainerWrapper, Container, Page } from "./Layout";

const Layout = ({ children }) => {
  const [expandedSideBar, handleExpandedSideBar] = useState(true);
  return (
    <Page>
      <Header
        handleSideBar={() => handleExpandedSideBar(!expandedSideBar)}
      />
      <ContainerWrapper>
        <Sidebar expanded={expandedSideBar}></Sidebar>
        <Container>{children}</Container>
      </ContainerWrapper>
      {/* <Footer /> */}
    </Page>
  );
};
export default Layout;
