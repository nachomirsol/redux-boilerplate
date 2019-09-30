import { combineReducers } from 'redux';
import todoListReducer from './containers/HomePage/reducers';
import postListReducer from './containers/PostPage/reducers';
import toggleReducer from './containers/WithToggle/reducers';
import languageReducer from './containers/LanguageProvider/reducers';


export default combineReducers({
    todoList: todoListReducer,
    postList: postListReducer,
    toggleStatus: toggleReducer,
    locale: languageReducer
});