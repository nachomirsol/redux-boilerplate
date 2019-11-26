import { SET_HIERARCHY, GET_HIERARCHY, CREATE_HIERACHY } from './constants'
import { createCheckboxTree } from 'services/hierachyService';
/**Mock data */
import hierarchyData from "../../../mockData/hierarchyData/hierarchyData.json";

// export const setHierarchy = (data) => {

//     return {
//         type: SET_HIERACHY,
//         payload: data
//     };

// }

export const createHierarchy = (data) => {
    return {
        type: CREATE_HIERACHY,
        payload: createCheckboxTree(hierarchyData.children)
    };
}
