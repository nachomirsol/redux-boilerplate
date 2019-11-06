import React from 'react';
import { Button, Form } from './CreateItem';

const CreateItem = ({ addElement, onHandleChange, value, onSearchElement }) => {
    return (
        <Form >
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Enter todo" onChange={onHandleChange} value={value} />
            </div>

            <Button bg="#af7eeb" color="#fff" onClick={addElement ? addElement : onSearchElement}>Add</Button>
            <Button bg="blue" color="black" onClick={addElement ? addElement : onSearchElement}>Add</Button>
        </Form>
    )
}

export default CreateItem