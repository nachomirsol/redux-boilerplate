import {
  CREATE_HIERARCHY,
  CHECK_HIERARCHY_ITEM,
  DISPLAY_HIERARCHY_CHILDREN,
  CREATE_MAP_AREAS,
  CREATE_ASSETS,
  CHECK_ASSETS
} from "./constants";
import { setSelectedAreas, setSelectedIcons } from "services/mapService";

const initialState = {
  hierarchy: [],
  mapAreas: [],
  iconAssets: [],
  selectedMapAreas: [],
  selectedIconAssets: []
};

const homePageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_HIERARCHY:
      return { ...state, hierarchy: action.payload };
    case CHECK_HIERARCHY_ITEM:
      return {
        ...state,
        hierarchy: action.payload,
        selectedMapAreas: setSelectedAreas(state.mapAreas, action.payload),
        selectedIconAssets: setSelectedIcons(state.iconAssets, action.payload)
      };
    case DISPLAY_HIERARCHY_CHILDREN:
      return { ...state, hierarchy: action.payload };
    case CREATE_MAP_AREAS:
      return { ...state, mapAreas: action.payload, selectedMapAreas: setSelectedAreas(action.payload, state.hierarchy) };
    case CREATE_ASSETS:
      return {
        ...state,
        iconAssets: action.payload,
        selectedIconAssets: setSelectedIcons(action.payload, state.hierarchy)
      };
    case CHECK_ASSETS:
      return {
        ...state,
        iconAssets: action.payload,
        selectedIconAssets: action.payload.filter(item => item.selected)
      };
    default:
      return state;
  }
};

export default homePageReducer;
