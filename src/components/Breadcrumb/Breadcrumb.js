import React from "react";
import Proptype from "prop-types";
import { useHistory } from "react-router-dom";
import "./breadcrumb.scss";

const Breadcrumb = ({ breadcrumbs }) => {
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
            <span>{breadcrumb.label}</span>
            <span className="breadcrumb__separator">/</span>
          </div>
        );
      }
      return (
        <div className="breadcrumb__item" key={`breadcrumb_item${index}`}>
          <span>{breadcrumb.label}</span>
        </div>
      );
    })
    : [];

  return <ol className="breadcrumb">{BreadcrumbsItems}</ol>;
};

Breadcrumb.propTypes = {
  breadcrumbs: Proptype.arrayOf(Proptype.object).isRequired
};


export default Breadcrumb;
