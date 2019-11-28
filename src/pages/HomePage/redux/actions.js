import { CREATE_HIERARCHY, DISPLAY_HIERARCHY_CHILDREN, CHECK_HIERARCHY_ITEM, CREATE_MAP_AREAS, CREATE_ASSETS, CHECK_ASSETS, CREATE_FILTERS } from './constants'
import { createCheckboxTree, displayHierarchyChildren, checkHierarchyItem } from 'services/hierachyService';
import { createMapAreas, setSelectedFilters } from 'services/mapService';
import { createAssetIcons, checkAssetIcon } from 'services/assetsService';

import hierarchyData from "../../../mockData/hierarchyData/hierarchyData.json";
import mapAreasData from "../../../mockData/areasDataModel.json";
import assetsData from "../../../mockData/assetsDataModel.json";



export const createHierarchy = () => {
    return {
        type: CREATE_HIERARCHY,
        payload: createCheckboxTree(hierarchyData.children)
    };
}

export const checkHierarchy = (id, hierarchy) => {

    return {
        type: CHECK_HIERARCHY_ITEM,
        payload: checkHierarchyItem(hierarchy, id)
    }
}

export const displayHierarchy = (id, hierarchy) => {
    return {
        type: DISPLAY_HIERARCHY_CHILDREN,
        payload: displayHierarchyChildren(hierarchy, id)
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

export const checkAssets = (filters, mapAreas, iconAssets, variableName, value, isChecked) => {
    return {
        type: CHECK_ASSETS,
        payload: checkAssetIcon(filters, mapAreas, iconAssets, variableName, value, isChecked)
    }
}

export const createFilters = (filtersModel) => {
    return {
        type: CREATE_FILTERS,
        payload: filtersModel
    }
}

export const changeFilterState = (filters, solution, name, checked) => {
    return {
        type: CHECK_ASSETS,
        payload: setSelectedFilters(filters, solution, name, checked)
    }
}



