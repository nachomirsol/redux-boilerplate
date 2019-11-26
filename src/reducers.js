import { combineReducers } from 'redux';
import toggleStatus from './components/hocs/WithToggle/reducers';
import settings from './components/hocs/WithSettings/redux/reducers';
import hierarchy from './pages/HomePage/redux/reducers';


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
        settings,
        hierarchy,
        ...injectedReducers,
    });
}

export default createReducer;
