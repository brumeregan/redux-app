import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';

export function* removePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.remove, [postId]);

        if (response.status !== 204) {
            const data = yield apply(response, response.json);

            throw new Error(data.message);
        }

        yield put(postsActions.removePost(postId));

    } catch (error) {
        yield put(uiActions.emitError(error, 'remove post worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
