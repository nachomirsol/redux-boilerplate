import React from "react";
import Proptypes from "prop-types";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import "./breadcrumb.scss";

const Breadcrumb = ({ breadcrumbs, intl }) => {
  const history = useHistory();
  let BreadcrumbsItems = breadcrumbs
    ? breadcrumbs.map((breadcrumb, index) => {
      if (index < breadcrumbs.length - 1) {
        return (
          <div
            className="breadcrumb__item"
            key={`breadcrumb_item${index}`}
            onClick={() => {
              if (breadcrumb.url) {
                history.push(breadcrumb.url);
              }
            }}
          >
            <span>
              {intl.formatMessage({
                id: `app.components.Breadcrumb.${breadcrumb.label}`
              })}</span>
            <span className="breadcrumb__separator">/</span>
          </div>
        );
      }
      return (
        <div
          className="breadcrumb__item breadcrumb__item--actived"
          key={`breadcrumb_item${index}`}
        >
          <span>                 {intl.formatMessage({
            id: `app.components.Breadcrumb.${breadcrumb.label}`
          })}</span>
        </div>
      );
    })
    : [];

  return <ol className="breadcrumb">{BreadcrumbsItems}</ol>;
};

Breadcrumb.propTypes = {
  breadcrumbs: Proptypes.arrayOf(Proptypes.object).isRequired,
  intl: Proptypes.object.isRequired
};

const mapStateToProps = ({ poblation }) => ({ poblation });

export default connect(mapStateToProps)(Breadcrumb);
