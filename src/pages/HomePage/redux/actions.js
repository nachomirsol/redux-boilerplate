import { SET_HIERARCHY, GET_HIERARCHY, CREATE_HIERARCHY, SEARCH_HIERARCHY_ELEMENT } from './constants'
import { createCheckboxTree, searchHierarchyElement } from 'services/hierachyService';
/**Mock data */
import hierarchyData from "../../../mockData/hierarchyData/hierarchyData.json";

// export const setHierarchy = (data) => {

//     return {
//         type: SET_HIERACHY,
//         payload: data
//     };

// }

export const createHierarchy = () => {
    return {
        type: CREATE_HIERARCHY,
        payload: createCheckboxTree(hierarchyData.children)
    };
}

/*export const searchHierarchy = () => {
    return {
        type: SEARCH_HIERARCHY_ELEMENT,
        payload: searchHierarchyElement(hierachyData.children)
    }
}*/