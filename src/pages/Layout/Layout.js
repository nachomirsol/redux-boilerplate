import React, { useState, useEffect } from "react";
/**Libraries */
import { withRouter } from "react-router-dom";
import PropTypes from "prop-types";
/**Components */
import { Header } from "components/Header";
import Sidebar from "components/Sidebar";
/**Styles*/
import "./layout.scss";

const Layout = ({ children, history, breadcrumbs }) => {
  const [expandedSideBar, setExpandedSideBar] = useState(false);
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
    <div className="page">
      <Header
        handleSideBar={() => setExpandedSideBar(!expandedSideBar)}
        history={history}
        breadcrumbs={breadcrumbs}
      />
      <div className="container-wrapper">
        <Sidebar expanded={expandedSideBar}></Sidebar>
        <div className="container">{children}</div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired,
  history: PropTypes.object.isRequired,
  breadcrumbs: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default withRouter(Layout);
