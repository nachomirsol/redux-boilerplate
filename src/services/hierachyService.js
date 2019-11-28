
export const createCheckboxTree = hierarchyData => {
    return hierarchyData.map(item => {
        item = { ...item, checked: false, displayed: false };
        if (item.children && item.children.length) {
            item.children = createCheckboxTree(item.children);
        }
        return item;
    });
}

/** This function search the id recursively over the hierarchy tree and returns the item searched over the data we pass it by param*/
export const searchHierarchyItem = (data, id) => {

    let itemFounded = data.find(item => item.id === id);
    if (!itemFounded) {
        const flattenArray = data.reduce((arr, item) => {
            return arr.concat(item.children);
        }, []);
        itemFounded = flattenArray.find(item => item.id === id);
        if (!itemFounded) {
            return searchHierarchyItem(flattenArray);
        }
    }
    return itemFounded;
};

/** This function is to change the checked status from the searched element, if it has children, all the children will be changed the checked status */
export const checkHierarchyItem = (data, id) => {

    const cloneData = [...data];
    const itemFounded = searchHierarchyItem(cloneData, id);
    itemFounded.checked = !itemFounded.checked;
    if (itemFounded.checked) {
        checkParentElements(data, itemFounded);
    }

    if (itemFounded.children && itemFounded.children.length) {
        itemFounded.children = itemFounded.children.map(child => {
            child.checked = itemFounded.checked;
            return child;
        });
    }
    return cloneData;
};

/** This function checks the parent elements by recursively*/
const checkParentElements = (data, itemFounded) => {
    if (itemFounded.parentId) {
        const parent = searchHierarchyItem(data, itemFounded.parentId);
        if (parent) {
            parent.checked = true;
            checkParentElements(data, parent);
        }
    }
    return data;
};

export const displayHierarchyChildren = (data, id) => {

    const cloneData = [...data];
    const itemsDisplayed = searchHierarchyItem(cloneData, id);
    itemsDisplayed.displayed = !itemsDisplayed.displayed;

    if (itemsDisplayed.children && itemsDisplayed.children.length) {
        itemsDisplayed.children = itemsDisplayed.children.map(child => {
            child.displayed = !child.displayed;
            return child;
        });
    }

    return cloneData;

};
