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

const Hierarchy = ({ hierarchy, checkHierarchy, displayHierarchy, intl, companyName }) => {


  /** This function prints the hierarchy tree in render */
  const showHierarchyTree = dataHierarchy => {

    return dataHierarchy.map(item => {
      if (!item.children.length) {
        return (
          <li
            key={item.id}
            className={item.displayed ? `expanded` : ``}
          >
            <HierarchyItem
              dataInfo={item}
              id={item.id}
              checked={item.checked}
              displayed={item.displayed}
              onDisplayChildren={(id) => displayHierarchy(id, hierarchy)}
              onCheckItem={(id) => checkHierarchy(id, hierarchy)}
            />
          </li>
        );
      }

      return (
        <li key={item.id}>
          <HierarchyItem
            dataInfo={item}
            icon={
              item.displayed
                ? 'chevron-right'
                : 'chevron-down'
            }
            id={item.id}
            checked={item.checked}
            displayed={item.displayed}
            onDisplayChildren={(id) => displayHierarchy(id, hierarchy)}
            onCheckItem={(id) => checkHierarchy(id, hierarchy)}
          />
          <ul>{showHierarchyTree(item.children)}</ul>
        </li>
      );
    });
  };

  return (
    <div className="hierarchy">
      <div> {companyName} </div>
      <div className="hierarchy__wrapper">
        <div className="hierarchy__list">
          <ul>{showHierarchyTree(hierarchy ? hierarchy : [])}</ul>
        </div>
      </div>
      <div style={{ height: "40px" }}> ADVANCED OPTIONS </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    checkHierarchy: (id, hierarchy) => dispatch(checkHierarchy(id, hierarchy)),
    displayHierarchy: (id, hierarchy) => dispatch(displayHierarchy(id, hierarchy)),
    dispatch
  };
}

const mapStateToProps = (state) => ({
  hierarchy: state.hierarchy.hierarchy,
  companyName: state.companyName.companyName
})

Hierarchy.propTypes = {
  intl: PropTypes.object.isRequired,
  hierarchy: PropTypes.array.isRequired,
  checkHierarchy: PropTypes.func.isRequired,
  displayHierarchy: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(injectIntl(Hierarchy));
