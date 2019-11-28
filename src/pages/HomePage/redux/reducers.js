import { CREATE_HIERARCHY, CHECK_HIERARCHY_ITEM, DISPLAY_HIERARCHY_CHILDREN, CREATE_MAP_AREAS, CREATE_ASSETS, CHECK_ASSETS } from './constants'

const initialState = {
    hierarchy: [],
    mapAreas: [],
    iconAssets: []
};

const homePageReducer = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_HIERARCHY:
            return { ...state, hierarchy: action.payload }
        case CHECK_HIERARCHY_ITEM:
            return { ...state, hierarchy: action.payload }
        case DISPLAY_HIERARCHY_CHILDREN:
            return { ...state, hierarchy: action.payload }
        case CREATE_MAP_AREAS:
            return { ...state, mapAreas: action.payload }
        case CREATE_ASSETS:
            return { ...state, iconAssets: action.payload }
        case CHECK_ASSETS:
            return { ...state, iconAssets: action.payload }
        default:
            return state
    }


}

export default homePageReducer;