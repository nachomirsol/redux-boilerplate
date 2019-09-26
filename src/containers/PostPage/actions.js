import { LIST_POSTS, DELETE_POST, ADD_POST } from './constants';
import PostService from '../../services/postService';

export const listPosts = () => dispatch => {
    PostService.getPosts()
        .then(response => dispatch({
            type: LIST_POSTS,
            payload: response.data
        }))
        .catch(err => {
            dispatch({
                type: LIST_POSTS,
                payload: ''
            })
        })

}

export const deletePost = (id) => dispatch => {
    PostService.deletePost(id)
        .then(() => dispatch({
            type: DELETE_POST,
            payload: id
        }))
        .catch(err => {
            dispatch({
                type: DELETE_POST,
                payload: `errorsito ${err}`
            })
        })
}

export const addPost = (data) => dispatch => {
    PostService.addPost(data)
        .then((response) => dispatch({
            type: ADD_POST,
            payload: response.data
        }))
}