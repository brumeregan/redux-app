import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';

export function* worker () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.fetch);
        const { data: post, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(postsActions.createPost(post));

    } catch (error) {
        yield put(uiActions.emitError(error, 'worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
