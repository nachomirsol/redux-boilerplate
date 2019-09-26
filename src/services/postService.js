import dataSource from "./dataSource";

function addPost(data) {
    return dataSource({
        baseURL: process.env.REACT_APP_ROOT_URL,
        config: {
            handleError: true
        },
        data,
        method: "POST",
        url: "/posts"
    });
}

function getPosts() {
    return dataSource({
        baseURL: process.env.REACT_APP_ROOT_URL,
        method: "GET",
        url: `/posts`
    });
}

function deletePost(id) {
    return dataSource({
        baseURL: process.env.REACT_APP_ROOT_URL,
        method: "DELETE",
        url: `/posts/${id}`
    });
}




const PostService = {
    getPosts,
    addPost,
    deletePost

};

export default PostService;
