
import { Map } from 'immutable';

import { authReducer } from '../reducer';

import { authActions } from '../actions';

const initialState = Map({
    isAuthenticated: false,
    isInitialized:   false,
});

describe('auth reducer', () => {
    test('should return initial state by default: ', () => {
        expect(authReducer(void 0, {})).toEqual(initialState);
    });

    test('should handle AUTHENTICATE: ', () => {
        expect(authReducer(void 0, authActions.authenticate())).toEqual(initialState.set('isAuthenticated', true));
    });

    test('should handle INITIALIZE: ', () => {
        expect(authReducer(void 0, authActions.initialize())).toEqual(initialState.set('isInitialized', true));
    });

    test('should handle LOGOUT: ', () => {
        expect(authReducer(void 0, authActions.logout())).toEqual(initialState.set('isAuthenticated', false));
    });
});
