import { combineReducers } from '@reduxjs/toolkit';
import * as USER from './User';
import * as POST from './Post';

const rootReducer = combineReducers({
    user: USER.userSliceReducer,
    post: POST.postsliceReducer
});

export type RootState = ReturnType<typeof rootReducer>;

export {
    rootReducer,
    USER,
    POST
};
