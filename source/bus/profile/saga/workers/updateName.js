import { api } from '../../../../REST';
import { postsActions } from '../../actions';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';
import { profileActions } from '../../../profile/actions';

export function* updateName ({ payload: {
    firstName,
    lastName
}}) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.profile.updateProfile, [
            {
                firstName,
                lastName
            }
        ]);
        const { data: updatedProfile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }
        yield put(profileActions.fillProfile(updatedProfile));

    } catch (error) {
        yield put(uiActions.emitError(error, 'update profile worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
