import React from "react";
/**Libraries */
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { injectIntl } from "react-intl";
/**Components */
import HierarchyItem from "./components/HierarchyItem";
/**Redux */
import { checkHierarchy, displayHierarchy } from "../../pages/HomePage/redux/actions";
/**Styles */
import "./hierarchy.scss";

const Hierarchy = ({ hierarchy, checkHierarchy, displayHierarchy, intl }) => {


  /** This function prints the hierarchy tree in render */
  const showHierarchyTree = dataHierarchy => {

    return dataHierarchy.map(item => {
      if (!item.children.length) {
        return (
          <li
            key={item.id}
            className={item.displayed === true ? `expanded` : ``}
          >
            <HierarchyItem
              dataInfo={item}
              onCheckItem={checkHierarchy}
              id={item.id}
              checked={item.checked}
              onDisplayChildren={displayHierarchy}
              displayed={item.displayed}
            />
          </li>
        );
      }

      return (
        <li key={item.id}>
          <HierarchyItem
            dataInfo={item}
            icon={
              item.displayed === true
                ? `fa fa-chevron-right`
                : `fa fa-chevron-down`
            }
            onCheckItem={checkHierarchy}
            id={item.id}
            checked={item.checked}
            onDisplayChildren={displayHierarchy}
            displayed={item.displayed}
          />
          <ul>{showHierarchyTree(item.children)}</ul>
        </li>
      );
    });
  };

  return (
    <div className="hierarchy">
      <div> SEARCH </div>
      <div className="hierarchy__wrapper">
        <div className="hierarchy__list">
          <ul>{showHierarchyTree(hierarchy ? hierarchy : [])}</ul>
        </div>
      </div>
      <div style={{ height: "40px" }}> ADVANCED OPTIONS </div>
    </div>
  );
};

function mapDispatchToProps(dispatch) {

  return {
    checkHierarchy: (id) => dispatch(checkHierarchy(id)),
    displayHierarchy: (id) => dispatch(displayHierarchy(id)),
    dispatch
  };
}

const mapStateToProps = (state) => ({
  hierarchy: state.hierarchy.hierarchy
})

Hierarchy.propTypes = {
  intl: PropTypes.object.isRequired,
  hierarchy: PropTypes.array.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Hierarchy));
