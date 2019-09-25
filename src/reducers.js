import { combineReducers } from 'redux';
import todoListReducer from './containers/HomePage/reducers';


export default combineReducers({
    todoList: todoListReducer
});