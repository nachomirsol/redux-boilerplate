/*
 *
 * LanguageProvider reducer
 *
 */

// import { fromJS } from 'immutable';
import produce from "immer";

import { TOGGLE_MENU, TOGGLE_SYSTEM, TOGGLE_ADMIN } from "./constants";

// const initialState = fromJS({
//     menuIsOpen: false,
//     systemIsOpen: false,
//     adminIsOpen: false,
// });

// return state
// .set('menuIsOpen', !state.get('menuIsOpen'));

const initialState = {
  menuIsOpen: false,
  systemIsOpen: false,
  adminIsOpen: false,
};

const pageSettingsReducer = (state = initialState, action) =>
  produce(state, draft => {
    // const pageSettingsReducer = (state = initialState, action) => {
    switch (action.type) {
      case TOGGLE_MENU:
        draft.menuIsOpen = !state.menuIsOpen;
        break;
      //       return state
      // .set('menuIsOpen', !state.get('menuIsOpen'));
      case TOGGLE_SYSTEM:
        draft.systemIsOpen = !state.systemIsOpen;
        break;
      //  return state
      //  .set('systemIsOpen', !state.get('systemIsOpen'));
      case TOGGLE_ADMIN:
        draft.adminIsOpen = !state.adminIsOpen;
        break;
      // return state
      //       .set('adminIsOpen', !state.get('adminIsOpen'));

      default:
        return draft;
    }
  });

export default pageSettingsReducer;
