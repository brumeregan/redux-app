import { takeEvery, all, call } from 'redux-saga/effects';

import { types } from '../types';

import { worker } from './workers';

export function* watchWorker () {
    yield takeEvery(types.TYPE, worker);
}

function* watchFetchPosts () {
    yield takeEvery(types.FETCH_POSTS_ASYNC, worker);
}

export function* watchDomain () {
    yield all([call(watchWorker)]);
}
