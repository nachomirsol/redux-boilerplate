import produce from "immer";
import { TOGGLE_ITEM } from "./constants";

const initialState = {
  toggleStatus: false
};

const ToggleReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case TOGGLE_ITEM:
        draft.toogleStatus = !state.toggleStatus;
        break;
      default:
        return draft;
    }
  });

export default ToggleReducer;
