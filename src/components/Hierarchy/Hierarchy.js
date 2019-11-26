import React, { useState, useEffect, useCallback } from "react";
/**Libraries */
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

/**Components */
import HierarchyItem from "./components/HierarchyItem";
/**Styles */
import "./hierarchy.scss";

const Hierarchy = ({ data, intl }) => {

  const [checkboxTree, setCheckboxTree] = useState([]);

  /** This function reproduces the hierarchy list tree recived by API or by json file and adds 2 elements, checked and displayed .but it is not in the state yet */
  const createCheckboxTree = useCallback(hierarchyList => {
    return hierarchyList.map(item => {
      item = { ...item, checked: false, displayed: false };
      if (item.children && item.children.length) {
        item.children = createCheckboxTree(item.children);
      }
      return item;
    });
  }, []);

  /** This function is to fill the react state with the createdCheckboxTree */
  const fillCheckboxTree = useCallback(
    hierarchyList => {
      const checkboxTree = createCheckboxTree(hierarchyList);
      setCheckboxTree(checkboxTree);
    },
    [createCheckboxTree, setCheckboxTree]
  );

  useEffect(() => {
    fillCheckboxTree(data.children);
  }, [fillCheckboxTree, data.children]);

  /** This function checks the parent elements by recursively*/
  const checkParentElements = (data, itemFounded) => {
    if (itemFounded.parentId) {
      const parent = searchHierarchyElement(data, itemFounded.parentId);
      if (parent) {
        parent.checked = true;
        checkParentElements(data, parent);
      }
    }
  };

  /** This function search the id recursively over the hierarchy tree and returns the item searched over the data we pass it by param*/
  const searchHierarchyElement = (data, id) => {
    let itemFounded = data.find(item => item.id === id);
    if (!itemFounded) {
      const flattenArray = data.reduce((arr, item) => {
        return arr.concat(item.children);
      }, []);
      itemFounded = flattenArray.find(item => item.id === id);
      if (!itemFounded) {
        return searchHierarchyElement(flattenArray);
      }
    }
    return itemFounded;
  };

  /** This function is to change the checked status from the searched element, if it has children, all the children will be changed the checked status */
  const checkHierarchyElement = id => {
    const stateClone = [...checkboxTree];

    const itemFounded = searchHierarchyElement(stateClone, id);
    itemFounded.checked = !itemFounded.checked;
    if (itemFounded.checked) {
      checkParentElements(stateClone, itemFounded);
    }

    if (itemFounded.children && itemFounded.children.length) {
      itemFounded.children = itemFounded.children.map(child => {
        child.checked = itemFounded.checked;
        return child;
      });
    }
    setCheckboxTree(stateClone);
  };

  /** This function is to change the displayed status from the searched element, if it has children, all the children will be changed the display status */
  const displayChildren = id => {
    const stateClone = [...checkboxTree];

    const itemsDisplayed = searchHierarchyElement(stateClone, id);
    itemsDisplayed.displayed = !itemsDisplayed.displayed;

    if (itemsDisplayed.children && itemsDisplayed.children.length) {
      itemsDisplayed.children = itemsDisplayed.children.map(child => {
        child.displayed = !child.displayed;
        return child;
      });
    }
    setCheckboxTree(stateClone);
  };

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
              onCheckItem={id => checkHierarchyElement(id)}
              id={item.id}
              checked={item.checked}
              onDisplayChildren={id => displayChildren(id)}
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
            onCheckItem={id => checkHierarchyElement(id)}
            id={item.id}
            checked={item.checked}
            onDisplayChildren={id => displayChildren(id)}
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
          <ul>{showHierarchyTree(checkboxTree ? checkboxTree : [])}</ul>
        </div>
      </div>
      <div style={{ height: "40px" }}> ADVANCED OPTIONS </div>
    </div>
  );
};

Hierarchy.propTypes = {
  intl: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default injectIntl(Hierarchy);
