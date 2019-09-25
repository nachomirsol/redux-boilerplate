import { ADD_TODO, GET_TODOS, DELETE_TODO } from './constants'

const initialState = {
    todoList: []
};

const todoListReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList, action.payload]
            }
        case GET_TODOS:
            return {
                ...state,
                todoList: state.todoList
            }
        case DELETE_TODO:
            debugger
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo !== action.payload)
            }
        default:
            return state
    }


}

export default todoListReducer