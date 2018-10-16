import { api } from '../../../../REST';
import { put, apply } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

// Instruments
import { uiActions } from '../../../ui/actions';
import { authActions } from '../../actions';
import { profileActions } from '../../../profile/actions';
import { postsActions } from '../../../posts/actions';
import { book } from '../../../../navigation/book';

export function* logout () {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.auth.logout);

        if (response.status !== 204) {
            const { message } = yield apply(response, response.json);

            throw new Error(message);
        }

    } catch (error) {
        yield put(uiActions.emitError(error, 'logout worker'));
    } finally {
        yield apply(localStorage, localStorage.removeItem, ['remember']);
        yield apply(localStorage, localStorage.removeItem, ['token']);
        yield put(postsActions.clearPosts());
        yield put(profileActions.clearProfile());
        yield put(uiActions.stopFetching());
        yield put(authActions.logout());
        yield put(replace(book.login));
    }
}
