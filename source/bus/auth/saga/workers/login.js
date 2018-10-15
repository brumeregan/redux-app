import { api } from '../../../../REST';
import { put, apply } from 'redux-saga/effects';

// Instruments
import { uiActions } from '../../../ui/actions';
import { authActions } from '../../actions';
import { profileActions } from '../../../profile/actions';

export function* login ({ payload: userInfo }) {
    try {
        yield put(uiActions.startFetching());

        console.log({ userInfo });
        console.log(api.auth);

        const response = yield apply(api, api.auth.login, [userInfo]);
        const { data: profile, message } = yield apply(response, response.json);

        if (response.status !== 200) {
            throw new Error(message);
        }

        yield put(profileActions.fillProfile(profile));
        yield put(authActions.authenticate());

    } catch (error) {
        yield put(uiActions.emitError(error, 'login worker'));
    } finally {
        yield put(uiActions.stopFetching());
    }
}
