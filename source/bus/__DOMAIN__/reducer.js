import { types } from './types';

export const reducer = (state = inititalState, action) => {
    switch (action.type) {
        case types.TYPE:
            return state;
        default:
            return state;
    }
}
