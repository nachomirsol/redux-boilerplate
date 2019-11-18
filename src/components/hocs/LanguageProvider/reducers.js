import produce from "immer";
import { CHANGE_LOCALE } from "./constants";

const initialState = {
  locale: "es"
};

const LanguageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOCALE:
        state.locale =
          draft.locale !== action.payload ? action.payload : state.locale;
        break;

      default:
        return draft;
    }
  });

export default LanguageReducer;
