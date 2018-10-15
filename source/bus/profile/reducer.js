import { types } from './types';
import { Map } from 'immutable';

const inititalState = Map({
    id:        '',
    firstName: '',
    lastName:  '',
    avatar:    '',
    token:     '',
});

export const profileReducer = (state = inititalState, action) => {
    switch (action.type) {
        case types.FILL_PROFILE:
            return state.merge(action.payload);
        default:
            return state;
    }
};
