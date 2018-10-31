import { combineReducers } from 'redux';

import { postsReducer as posts } from '../bus/posts/reducer';
import { uiReducer as ui } from '../bus/ui/reducer';
import { authReducer as auth } from '../bus/auth/reducer';
import { profileReducer as profile } from '../bus/profile/reducer';
import { routerReducer as router } from 'react-router-redux';
import { usersReducer as users } from '../bus/users/reducer';
import { formReducer as forms } from '../bus/forms/reducer';

export const rootReducer = combineReducers({
    auth,
    posts,
    ui,
    profile,
    router,
    users,
    forms,
});
