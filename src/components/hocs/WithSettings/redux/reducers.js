import { CHANGE_LOCALE, CHANGE_THEME } from "./constants";
import produce from "immer";

const localStorageLocale = localStorage.getItem("locale");
const localStorageTheme = localStorage.getItem("theme");

const initialState = {
  locale: localStorageLocale || "es",
  theme: localStorageTheme || "theme-dark"
};

const SettingsReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_LOCALE:
        draft.locale =
          state.locale !== action.payload ? action.payload : state.locale;
        localStorage.setItem("locale", draft.locale);
        break;
      case CHANGE_THEME:
        draft.theme =
          state.theme !== action.payload ? action.payload : state.theme;
        localStorage.setItem("theme", draft.theme);
        break;
      default:
        return draft;
    }
  });

export default SettingsReducer;
