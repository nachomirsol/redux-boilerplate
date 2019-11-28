import {
  CREATE_HIERARCHY,
  CHECK_HIERARCHY_ITEM,
  DISPLAY_HIERARCHY_CHILDREN,
  CREATE_MAP_AREAS,
  CREATE_ASSETS,
  CHECK_ASSETS,
  CREATE_FILTERS
} from "./constants";
import { setSelectedAreas, setSelectedIcons } from "services/mapService";

const initialState = {
  hierarchy: [],
  mapAreas: [],
  iconAssets: [],
  selectedMapAreas: [],
  selectedIconAssets: [],
  filters: []
};
let newIcons;
let newArea;
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
      return {
        ...state,
        mapAreas: action.payload,
        selectedMapAreas: setSelectedAreas(action.payload, state.hierarchy)
      };
    case CREATE_ASSETS:
      return {
        ...state,
        iconAssets: action.payload,
        selectedIconAssets: setSelectedIcons(action.payload, state.hierarchy)
      };
    case CHECK_ASSETS:
      newIcons = setSelectedIcons(
        action.payload.iconAssets,
        state.hierarchy
      ).filter(item => item.selected);
      newArea = setSelectedAreas(
        action.payload.mapAreas,
        state.hierarchy
      ).filter(item => item.properties.selected);
      return {
        ...state,
        iconAssets: action.payload.iconAssets,
        mapAreas: action.payload.mapAreas,
        selectedIconAssets: newIcons,
        selectedMapAreas: newArea
      };
    case CREATE_FILTERS:
      return { ...state, filters: action.payload };
    default:
      return state;
  }
};

export default homePageReducer;
