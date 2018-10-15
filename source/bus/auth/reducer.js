import { Map } from 'immutable';

import { types } from './types';

const inititalState = Map({
    isAuthenticated: false,
});

export const authReducer = (state = inititalState, action) => {
    switch (action.type) {
        case types.AUTHENTICATE:
            return state.set('isAuthenticated', true);
        default:
            return state;
    }
};
