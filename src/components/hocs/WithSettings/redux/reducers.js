import { CHANGE_LOCALE, CHANGE_THEME } from './constants';

const initialState = {
    locale: 'es',
    theme: 'theme-dark'
}

const SettingsReducer = (state = initialState, action) => {
    switch (action.type) {
        case CHANGE_LOCALE:
            return {
                ...state,
                locale: state.locale !== action.payload ? action.payload : state.locale
            }
        case CHANGE_THEME:
            return {
                ...state,
                theme: state.theme !== action.payload ? action.payload : state.theme
            }
        default:
            return state
    }
}

export default SettingsReducer;
