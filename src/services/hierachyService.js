

// /** This function checks the parent elements by recursively*/
// const checkParentElements = (data, itemFounded) => {
//     if (itemFounded.parentId) {
//         const parent = searchHierarchyElement(data, itemFounded.parentId);
//         if (parent) {
//             parent.checked = true;
//             checkParentElements(data, parent);
//         }
//     }
// };

// /** This function search the id recursively over the hierarchy tree and returns the item searched over the data we pass it by param*/
// const searchHierarchyElement = (data, id) => {
//     let itemFounded = data.find(item => item.id === id);
//     if (!itemFounded) {
//         const flattenArray = data.reduce((arr, item) => {
//             return arr.concat(item.children);
//         }, []);
//         itemFounded = flattenArray.find(item => item.id === id);
//         if (!itemFounded) {
//             return searchHierarchyElement(flattenArray);
//         }
//     }
//     return itemFounded;
// };

// /** This function is to change the checked status from the searched element, if it has children, all the children will be changed the checked status */
// const checkHierarchyElement = id => {
//     const stateClone = [...checkboxTree];

//     const itemFounded = searchHierarchyElement(stateClone, id);
//     itemFounded.checked = !itemFounded.checked;
//     if (itemFounded.checked) {
//         checkParentElements(stateClone, itemFounded);
//     }

//     if (itemFounded.children && itemFounded.children.length) {
//         itemFounded.children = itemFounded.children.map(child => {
//             child.checked = itemFounded.checked;
//             return child;
//         });
//     }
//     setCheckboxTree(stateClone);
// };

export const createCheckboxTree = hierarchyData => {
    return hierarchyData.map(item => {
        item = { ...item, checked: false, displayed: false };
        if (item.children && item.children.length) {
            item.children = createCheckboxTree(item.children);
        }
        return item;
    });
}

// const [checkboxTree, setCheckboxTree] = useState([]);

// /** This function reproduces the hierarchy list tree recived by API or by json file and adds 2 elements, checked and displayed .but it is not in the state yet */
// const createCheckboxTree = useCallback(hierarchyList => {
//   return hierarchyList.map(item => {
//     item = { ...item, checked: false, displayed: false };
//     if (item.children && item.children.length) {
//       item.children = createCheckboxTree(item.children);
//     }
//     return item;
//   });
// }, []);



// /** This function is to fill the react state with the createdCheckboxTree */
// const fillCheckboxTree = useCallback(
//   hierarchyList => {
//     const checkboxTree = createCheckboxTree(hierarchyList);
//     setCheckboxTree(checkboxTree);
//   },
//   [createCheckboxTree, setCheckboxTree]
// );

// useEffect(() => {
//   fillCheckboxTree(data.children);
// }, [fillCheckboxTree, data.children]);

// /** This function checks the parent elements by recursively*/
// const checkParentElements = (data, itemFounded) => {
//   if (itemFounded.parentId) {
//     const parent = searchHierarchyElement(data, itemFounded.parentId);
//     if (parent) {
//       parent.checked = true;
//       checkParentElements(data, parent);
//     }
//   }
// };

/** This function search the id recursively over the hierarchy tree and returns the item searched over the data we pass it by param*/
export const searchHierarchyElement = (data, id) => {
    alert(id)
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

// /** This function is to change the checked status from the searched element, if it has children, all the children will be changed the checked status */
// const checkHierarchyElement = id => {
//   const stateClone = [...checkboxTree];

//   const itemFounded = searchHierarchyElement(stateClone, id);
//   itemFounded.checked = !itemFounded.checked;
//   if (itemFounded.checked) {
//     checkParentElements(stateClone, itemFounded);
//   }

//   if (itemFounded.children && itemFounded.children.length) {
//     itemFounded.children = itemFounded.children.map(child => {
//       child.checked = itemFounded.checked;
//       return child;
//     });
//   }
//   setCheckboxTree(stateClone);
// };