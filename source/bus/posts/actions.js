import { FETCH_POSTS_ASYNC, FILL_POSTS, CREATE_POST_ASYNC, ADD_POST } from './types';
import { api } from '../../REST';

export const fillPosts = (posts) => {
    return {
        type:    FILL_POSTS,
        payload: posts,
    };
};

export const addPost = (post) => {
    return {
        type:    ADD_POST,
        payload: post,
    };
};

export const fetchPostsAsync = () => async (dispatch) => {
    dispatch({
        type: FETCH_POSTS_ASYNC,
    });

    const response = await api.posts.fetch();
    const results = await response.json();

    dispatch(fillPosts(results.data));
};

export const createPostAsync = (comment) => async (dispatch, getState) => {
    dispatch({
        type:    CREATE_POST_ASYNC,
        payload: comment,
    });

    const response = await api.posts.create(comment);
    const results = await response.json();

    dispatch(addPost(results.data));
};
