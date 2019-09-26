import { combineReducers } from 'redux';
import todoListReducer from './containers/HomePage/reducers';
import postListReducer from './containers/PostPage/reducers';


export default combineReducers({
    todoList: todoListReducer,
    postList: postListReducer
});