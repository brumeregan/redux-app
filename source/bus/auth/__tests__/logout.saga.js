import { expectSaga } from 'redux-saga-test-plan';

import { api } from '../../../REST';
import { apply } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

// Instruments
import { uiActions } from '../../ui/actions';
import { authActions } from '../actions';
import { profileActions } from '../../profile/actions';
import { postsActions } from '../../posts/actions';
import { book } from '../../../navigation/book';
import { usersActions } from '../../users/actions';
import { actions } from 'react-redux-form';

import { logout } from '../saga/workers';

describe('logout saga:', () => {
    test('should handle 204 response status scenario', async () => {
        await expectSaga(logout)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.auth.logout), __.fetchResponseSuccess204]])
            .apply(localStorage, localStorage.removeItem, ['remember'])
            .apply(localStorage, localStorage.removeItem, ['token'])
            .put(postsActions.clearPosts())
            .put(usersActions.clearUsers())
            .put(profileActions.clearProfile())
            .put(uiActions.stopFetching())
            .put(actions.reset('forms.user'))
            .put(authActions.logout())
            .put(replace(book.login))
            .run();
    });

    test('should handle 400 response status scenario', async () => {
        await expectSaga(logout)
            .put(uiActions.startFetching())
            .provide([[apply(api, api.auth.logout), __.fetchResponseFail400]])
            .put(uiActions.emitError(__.error, 'logout worker'))
            .apply(localStorage, localStorage.removeItem, ['remember'])
            .apply(localStorage, localStorage.removeItem, ['token'])
            .put(postsActions.clearPosts())
            .put(usersActions.clearUsers())
            .put(profileActions.clearProfile())
            .put(uiActions.stopFetching())
            .put(actions.reset('forms.user'))
            .put(authActions.logout())
            .put(replace(book.login))
            .run();
    });
});
