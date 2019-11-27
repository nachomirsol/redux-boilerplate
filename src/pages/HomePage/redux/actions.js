import { CREATE_HIERARCHY, DISPLAY_HIERARCHY_CHILDREN, CHECK_HIERARCHY_ITEM, CREATE_MAP_AREAS, CREATE_ASSETS } from './constants'
import { createCheckboxTree, displayHierarchyChildren, checkHierarchyItem } from 'services/hierachyService';
import { createMapAreas } from 'services/mapService';
import { createAssetIcons } from 'services/assetsService';

import hierarchyData from "../../../mockData/hierarchyData/hierarchyData.json";
import mapAreasData from "../../../mockData/areasDataModel.json";
import assetsData from "../../../mockData/assetsDataModel.json";



export const createHierarchy = () => {
    return {
        type: CREATE_HIERARCHY,
        payload: createCheckboxTree(hierarchyData.children)
    };
}

export const checkHierarchy = (id) => {

    return {
        type: CHECK_HIERARCHY_ITEM,
        payload: checkHierarchyItem(hierarchyData.children, id)
    }
}

export const displayHierarchy = (id) => {
    return {
        type: DISPLAY_HIERARCHY_CHILDREN,
        payload: displayHierarchyChildren(hierarchyData.children, id)
    }
}

export const createAreas = () => {
    return {
        type: CREATE_MAP_AREAS,
        payload: createMapAreas(mapAreasData)
    }
}

export const createAssets = () => {
    return {
        type: CREATE_ASSETS,
        payload: createAssetIcons(assetsData)
    }
}

