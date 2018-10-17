import { types } from './types';

export const postsActions = {
    fillPosts: (posts) => {
        return {
            type: types.FILL_POSTS,
            payload: posts,
        };
    },

    createPost: (post) => {
        return {
            type: types.CREATE_POST,
            payload: post,
        };
    },

    clearPosts: () => {
        return {
            type: types.CLEAR_POSTS,
        };
    },

    deletePost: (postId) => {
        return {
            type: types.DELETE_POST,
            payload: postId
        };
    },

    fetchPostsAsync: () => {
        return {
            type: types.FETCH_POSTS_ASYNC,
        };
    },

    createPostAsync: (comment) => {

        return {
            type:    types.CREATE_POST_ASYNC,
            payload: comment,
        };
    },

    deletePostAsync: (postId) => {
        return {
            type:    types.DELETE_POST_ASYNC,
            payload: postId
        };
    },
};
