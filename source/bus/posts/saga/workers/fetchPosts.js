import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';

export function* fetchPosts () {
    yield console.log('fetch posts SAGA');
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.fetch);
        const { data: posts, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(postsActions.fillPosts(posts));

    } catch (error) {
        yield put(uiActions.emitError(error, 'fetch posts worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
