import { types } from './types';

export const authActions = {
    authenticate: () => {
        return {
            type: types.AUTHENTICATE,
        };
    },
    initialize: () => {
        return {
            type: types.INITIALIZE,
        };
    },
    logout: () => {
        return {
            type: types.LOGOUT,
        };
    },
    signupAsync: (userData) => {
        return {
            type:    types.SIGNUP_ASYNC,
            payload: userData,
        };
    },
    loginAsync: (userData) => {
        return {
            type:    types.LOGIN_ASYNC,
            payload: userData,
        };
    },
    authenticateAsync: () => {
        return {
            type: types.AUTHENTICATE_ASYNC,
        };
    },
    logoutAsync: () => {
        return {
            type: types.LOGOUT_ASYNC,
        };
    },
};