import { createSelector } from 'reselect';

const getTodoList = (state) => state.todoList.todoList

export const makeSelectTodoList = () => createSelector(
    getTodoList,
    (todos) => todos
)