import { types } from './types';

import { Map } from 'immutable';

const inititalState = Map({
    isFetching: false,
});

export const uiReducer = (state = inititalState, action) => {
    switch (action.type) {
        case types.START_FETCHING:
            return state.set('isFetching', true);
        case types.STOP_FETCHING:
            return state.set('isFetching', false);
        default:
            return state;
    }
};
