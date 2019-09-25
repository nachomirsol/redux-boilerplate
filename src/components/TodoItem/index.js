import React from 'react';
import './TodoItem.css';

const TodoItem = ({ text, deleteElement }) => {
    return (
        <div className="todoItem">
            <div className="checkbox">
                <input type="checkbox" />
            </div>
            <div className="text">
                {text}
            </div>
            <div className="delete" onClick={deleteElement}>
                <i className="far fa-trash-alt"></i>
            </div>
        </div>
    )
}

export default TodoItem