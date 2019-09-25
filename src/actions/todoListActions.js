import { ADD_TODO, GET_TODOS, DELETE_TODO } from '../constants/constants'

export const addTodo = (data) => {

    return {
        type: ADD_TODO,
        payload: data
    };

}

export const getTodos = () => {
    return {
        type: GET_TODOS,
        payload: ''
    }
}

export const deleteTodo = (name) => {
    return {
        type: DELETE_TODO,
        payload: name
    }
}