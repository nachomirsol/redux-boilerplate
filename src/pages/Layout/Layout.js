import React from "react";
/**Libraries */
import { compose } from "redux";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";
/**Components */
import { WithPageSettings } from "components/hocs/WithPageSettings";
import { Header } from "components/Header";
import Sidebar from "components/Sidebar";
/**Styles*/
import "./layout.scss";

const Layout = ({ children, breadcrumbs, pageSettings, onToggleMenu }) => {
  const { menuIsOpen } = pageSettings;
  const history = useHistory();
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
