
import React, { useState, useEffect } from 'react';

import { connect } from 'react-redux';

import { injectIntl } from 'react-intl';

import CreateItem from '../../components/CreateItem';
import Layout from '../../components/Layout';
import TodoItem from '../../components/TodoItem';

import { listPosts, deletePost, filterPost } from './actions';

import { createStructuredSelector } from "reselect";
import { makeSelectPostList } from './selectors'

import './PostPage.scss';

const PostPage = ({ listPosts, deletePost, postList, filterPost, intl }) => {

    const [value, setValue] = useState()

    useEffect(() => {
        listPosts()
    }, [])

    const searchPostElement = (query) => {
        if (query !== "") {
            filterPost(query)
        } else {
            listPosts()
        }
    }

    const onDelete = (id) => {
        deletePost(id)
    }

    return (
        <Layout>
            <div className="row">
                <div className="col-md-6">
                    <h4>{intl.formatMessage({ id: 'POST' })}</h4>
                    <CreateItem onHandleChange={(e) => setValue(e.target.value)} value={value} onSearchElement={() => searchPostElement(value)} />
                    {postList.map(element => <TodoItem text={element.title} key={element.id} id={element.id} deleteElement={() => onDelete(element.id)} />)}

                </div>
            </div>
        </Layout>
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


export default connect(mapStateToProps, { listPosts, deletePost, filterPost })(injectIntl(PostPage))