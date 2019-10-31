import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import { ContainerWrapper, Container, Page } from "./Layout";

const Layout = ({ children }) => {
  return (
    <Page>
      <Header title="TITLE" />
      <ContainerWrapper>
        <Sidebar></Sidebar>
        <Container>{children}</Container>
      </ContainerWrapper>
      {/* <Footer /> */}
    </Page>
  );
};
export default Layout;
