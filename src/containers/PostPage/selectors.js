import { createSelector } from 'reselect';

const getPostList = (state) => state.postList.postList

export const makeSelectPostList = () => createSelector(
    getPostList,
    (posts) => posts
)