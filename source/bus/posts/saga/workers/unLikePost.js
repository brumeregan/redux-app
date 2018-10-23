import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { put, apply, select } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';

export function* unlikePost ({ payload: postId }) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.posts.like, [postId]);

        if (response.status !== 204) {
            const data = yield apply(response, response.json);

            throw new Error(data.message);
        }

        const liker =  yield select((state) => {
            return state.profile.removeAll(['avatar', 'token']);
        });

        yield put(postsActions.unlikePost({ liker, postId }));

    } catch (error) {
        yield put(uiActions.emitError(error, 'remove post worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
