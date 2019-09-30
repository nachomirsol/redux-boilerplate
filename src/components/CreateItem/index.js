import React from 'react';
import './CreateItem.css';

const CreateItem = ({ addElement, onHandleChange, value, onSearchElement }) => {
    return (
        <form >
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter todo" onChange={onHandleChange} value={value} />
            </div>

            <button type="button" className="btn btn-info" onClick={addElement ? addElement : onSearchElement}>Add</button>
        </form>
    )
}

export default CreateItem