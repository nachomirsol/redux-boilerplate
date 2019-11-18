import { combineReducers } from 'redux';
import toggleStatus from './components/hocs/WithToggle/reducers';
import locale from './components/hocs/LanguageProvider/reducers';


// export default combineReducers({
//     toggleStatus: toggleReducer,
//     locale: languageReducer
// });

/**
 * Creates the main reducer with the dynamically injected ones
 */
const createReducer = (injectedReducers) => {
    return combineReducers({
        toggleStatus,
        locale,
        ...injectedReducers,
    });
}

export default createReducer;