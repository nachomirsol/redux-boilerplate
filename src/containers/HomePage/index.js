
import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from '../../components/Header';

import CreateItem from '../../components/CreateItem';
import TodoItem from '../../components/TodoItem';
import { addTodo, getTodos, deleteTodo } from './actions';
import { createStructuredSelector } from "reselect";
import { makeSelectTodoList } from './selectors'

import './HomePage.css';


const HomePage = ({ addTodo, getTodos, deleteTodo, todoList }) => {

    const [value, setValue] = useState('')

    const addTodoItem = () => {
        const newTodo = value;
        addTodo(newTodo);
        setValue('')
    }

    const deleteTodoItem = (name) => {
        deleteTodo(name)
        getTodoList()
    }

    const getTodoList = () => {
        getTodos();
        console.log('getted')
    }

    return (
        <div>
            <Header title="TODO APP" />
            <div className="homepage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>TODOS</h4>
                            <CreateItem addElement={addTodoItem} onHandleChange={(e) => setValue(e.target.value)} value={value} />
                            {todoList ? todoList.map((element, index) => (
                                <TodoItem text={element} key={index} deleteElement={() => deleteTodoItem(element)} />
                            )) : ['no']}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

// This works
/*const mapStateToProps = (state) => ({
    todoList:state.todoList.todoList
})*/


// This works better in case of state tree is modified

/*const selectTodoList = (state) => {
    return state.todoList.todoList
}

const mapStateToProps = (state) => ({
    todoList:selectTodoList(state)
})
*/

// This works better in terms of performance using createStructuredSelector and selectors
const mapStateToProps = createStructuredSelector(
    {
        todoList: makeSelectTodoList()
    }
);



export default connect(mapStateToProps, { addTodo, getTodos, deleteTodo })(HomePage)