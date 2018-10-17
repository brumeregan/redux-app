import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';

export function* deletePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.delete, [postId]);
        const data = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(postsActions.deletePost(postId));

    } catch (error) {
        yield put(uiActions.emitError(error, 'create post worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
