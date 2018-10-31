import { takeEvery, all, call } from 'redux-saga/effects';

import { types } from '../types';

import { updateName } from './workers';
import { updateAvatar } from './workers';

function* watchUpdateName () {
    yield takeEvery(types.UPDATE_NAME_ASYNC, updateName);
}

function* watchUpdateAvatar () {
    yield takeEvery(types.UPDATE_AVATAR_ASYNC, updateAvatar);
}

export function* watchProfile () {
    yield all([
        call(watchUpdateName),
        call(watchUpdateAvatar)
    ]);
}
