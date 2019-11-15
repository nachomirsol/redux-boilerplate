import { combineReducers } from 'redux';
import toggleReducer from './components/hocs/WithToggle/reducers';
import languageReducer from './components/hocs/LanguageProvider/reducers';


export default combineReducers({
    toggleStatus: toggleReducer,
    locale: languageReducer
});