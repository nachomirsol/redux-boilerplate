import { combineReducers } from 'redux';
import toggleReducer from './components/hocs/WithToggle/reducers';
// import languageReducer from './components/hocs/LanguageProvider/reducers';
import settingsReducer from './components/hocs/WithSettings/redux/reducers';


export default combineReducers({
    toggleStatus: toggleReducer,
    settings: settingsReducer
});