import { CHANGE_LOCALE } from './constants';

const initialState = {
    locale: 'es'
}

const LanguageReducer = (state = initialState, action) => {

    switch (action.type) {
        case CHANGE_LOCALE:
            return {
                ...state,
                locale: state.locale !== action.payload ? action.payload : state.locale
            }
        default:
            return state
    }
}

export default LanguageReducer