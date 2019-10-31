import React from 'react';
import './TodoItem.scss';

const TodoItem = ({ id, text, deleteElement }) => {
    return (
        <div className="todoItem">
            <div className="checkbox">
                {id ? id : <input type="checkbox" value="true" />}
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