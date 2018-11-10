import { usersActions } from '../actions';
import { types } from '../types';

describe('users actions', () => {
    test('fetchUsersAsync return object with type FETCH_USERS_ASYNC', () => {
        expect(usersActions.fetchUsersAsync()).toEqual({
            type: types.FETCH_USERS_ASYNC,
        });
    });

    test('clearUsers return object with type CLEAR_USERS', () => {
        expect(usersActions.clearUsers()).toEqual({
            type: types.CLEAR_USERS,
        });
    });

    test('fillUsers return object with type FILL_USERS and payload', () => {
        expect(usersActions.fillUsers(__.users)).toEqual({
            type: types.FILL_USERS,
            payload: __.users
        });
    });
});
