import React, { useState, useEffect } from "react";
/**Libraries */
import PropTypes from "prop-types";
import { injectIntl } from "react-intl";

/**Components */
import HierachyItem from "./components/HierachyItem";
/**Styles */
import "./hierachy.scss";

const Hierachy = ({ data, intl }) => {

  const [checkboxTree, setCheckboxTree] = useState([]);

  useEffect(() => {
    fillCheckboxTree(data.children);
  }, []);

  const fillCheckboxTree = dataHierachy => {
    const checkboxTree = createCheckboxTree(dataHierachy);
    setCheckboxTree(checkboxTree);
  };

  const createCheckboxTree = dataHierachy => {
    return dataHierachy.map(item => {
      item = { ...item, checked: false };
      if (item.children && item.children.length) {
        item.children = createCheckboxTree(item.children);
      }
      return item;
    });
  };

//   const checkItem = data => {
//     const nextState = produce(checkboxTree, draftState => {
//       let itemChecked = draftState.find(item => item.id === data.id);
//       if (!itemChecked) {
//         itemChecked = _.chain(draftState)
//           .map("children") // pluck all children from data
//           .flatten() // flatten the elements into a single array
//           .find({ id: data.id }) // exatract the element with a id of item.id (id should be unique)
//           .value();
//       }
//       itemChecked.checked = !itemChecked.checked;
//       if (itemChecked.children && itemChecked.children.length) {
//         itemChecked.children = itemChecked.children.map(child => {
//             child.checked = itemChecked.checked;
//             return child;
//         });
//       }
//       return draftState;
//     });

//     setCheckboxTree(nextState);
//   };

  const searchItem = (data, id) => {
    let itemChecked = data.find(item => item.id === id);
    if (!itemChecked) {
        const flattenArray = data.reduce((array, item) => {
            return array.concat(item.children)
        }, []);
        itemChecked = flattenArray.find(item => item.id === id);
        if (!itemChecked) {
            return searchItem(flattenArray);
        }
    }
    return itemChecked;
  }

  const checkItem = id => {
      const nextState = [...[], ...checkboxTree];
      const itemChecked = searchItem(nextState, id);
      itemChecked.checked = !itemChecked.checked;
      if (itemChecked.children && itemChecked.children.length) {
        itemChecked.children = itemChecked.children.map(child => {
            child.checked = itemChecked.checked;
            return child;
        });
      }
    setCheckboxTree(nextState);
  };

  const showHierachy = dataHierachy => {
    return dataHierachy.map(item => {
      if (!item.children || !item.children.length) {
        return (
          <li key={item.id}>
            <HierachyItem
              dataInfo={item}
              icon={""}
              style={"withoutChildren"}
              onCheckItem={data => checkItem(data)}
              id={item.id}
              checked={item.checked}
            />
          </li>
        );
      }

      return (
        <li key={item.id}>
          <ul>
            <HierachyItem
              dataInfo={item}
              icon={"fa fa-chevron-down"}
              style={"withChildren"}
              onCheckItem={data => checkItem(data)}
              id={item.id}
              checked={item.checked}
            />
            {showHierachy(item.children)}
          </ul>
        </li>
      );
    });
  };

  return (
    <div className="hierachy">
      <ul>{showHierachy(checkboxTree ? checkboxTree : [])}</ul>
    </div>
  );
};

Hierachy.propTypes = {
  intl: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired
};

export default injectIntl(Hierachy);
