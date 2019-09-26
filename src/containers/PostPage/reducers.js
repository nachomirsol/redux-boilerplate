import { LIST_POSTS, DELETE_POST, ADD_POST } from './constants';

const initialState = {
    postList: []
}

const postListReducer = (state = initialState, action) => {
    switch (action.type) {
        case LIST_POSTS:
            return {
                ...state,
                postList: action.payload
            }
        case DELETE_POST:
            return {
                ...state,
                postList: state.postList.filter(post => post.id !== action.payload)
            }
        case ADD_POST:
            return {
                ...state,
                postList: [...state.postList, action.payload]
            }
        default:
            return state
    }
}

export default postListReducer;