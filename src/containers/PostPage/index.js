
import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import CreateItem from '../../components/CreateItem';
import Header from '../../components/Header';
import TodoItem from '../../components/TodoItem';

import { listPosts, deletePost, addPost } from './actions';

import { createStructuredSelector } from "reselect";
import { makeSelectPostList } from './selectors'

import './PostPage.scss';


const PostPage = ({ listPosts, deletePost, addPost, postList }) => {

    const [value, setValue] = useState()

    useEffect(() => {
        listPosts()
    }, [])

    const addPostItem = () => {
        alert(value)
        const postData = { title: value };
        addPost(postData)
        setValue('')
        listPosts()

    }

    const onDelete = (id) => {
        deletePost(id)
    }

    return (
        <div>
            <Header title="TODO APP" />
            <div className="postpage">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h4>Posts</h4>
                            <CreateItem addElement={addPostItem} onHandleChange={(e) => setValue(e.target.value)} value={value} />
                            {postList.map(element => <TodoItem text={element.title} key={element.id} id={element.id} deleteElement={() => onDelete(element.id)} />)}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

/*const mapStateToProps = (state) => ({
    postList: state.postList.postList
})*/

const mapStateToProps = createStructuredSelector(
    {
        postList: makeSelectPostList()
    }
);


export default connect(mapStateToProps, { listPosts, deletePost, addPost })(PostPage)