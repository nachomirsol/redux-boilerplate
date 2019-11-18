import React, { useEffect } from "react";
import Sidebar from "components/Sidebar";
import PropTypes from "prop-types";
import { compose } from "redux";
import { Header } from "components/Header";
import { useHistory } from "react-router-dom";
import { WithPageSettings } from "components/hocs/WithPageSettings";
import "./layout.scss";

const Layout = ({ children, breadcrumbs, pageSettings, onToggleMenu }) => {
  const { menuIsOpen } = pageSettings;
  const history = useHistory();
  const checkWindowSize = () => {
    if (window.innerWidth <= 768) {
      onToggleMenu(false);
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
        handleSideBar={() => onToggleMenu(!menuIsOpen)}
        history={history}
        breadcrumbs={breadcrumbs}
      />
      <div className="container-wrapper">
        <Sidebar expanded={menuIsOpen}></Sidebar>
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
  breadcrumbs: PropTypes.arrayOf(PropTypes.object).isRequired,
  pageSettings: PropTypes.object.isRequired,
  onToggleMenu: PropTypes.func.isRequired,
};

export default compose(WithPageSettings)(Layout);
