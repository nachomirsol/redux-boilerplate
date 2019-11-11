import { combineReducers } from 'redux';
import toggleReducer from './containers/WithToggle/reducers';
import languageReducer from './containers/LanguageProvider/reducers';


export default combineReducers({
    toggleStatus: toggleReducer,
    locale: languageReducer
});