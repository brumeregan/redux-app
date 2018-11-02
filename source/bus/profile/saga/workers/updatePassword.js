import { api } from '../../../../REST';
import { put, apply } from 'redux-saga/effects';
import { uiActions } from '../../../ui/actions';

export function* updatePassword ({ payload: { newPassword, oldPassword }}) {
    try {
        yield put(uiActions.startFetching());

        const response = yield apply(api, api.profile.updateProfile, [{ newPassword, oldPassword }]);
        const { data: updatedProfile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

    } catch (error) {
        yield put(uiActions.emitError(error, 'update password worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
