import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from '../api/userAPI';

interface UserSelectorProps {
    status: 'idle' | 'loading' | 'failed';
    users: Array<User>
}

const initialState: UserSelectorProps = {
    status: 'idle',
    users: []
}


const getUserAsync = createAsyncThunk('user/fetch', async () => {
    const response = await fetchUsers();
    return response;
})

/**
 * auth reducer handler
 * @param {Object} state - redux state
 * @param {Object} action - type and payload
 */

const getUserReducer = (
    state: UserSelectorProps,
    action: PayloadAction<UserSelectorProps>,
): void => {
    state.users = action.payload.users;
    state.status = action.payload.status;
};


// REDUCER 
const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        getUser: getUserReducer,
    },
    extraReducers: (builder) => {
        builder.addCase(getUserAsync.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(getUserAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.users = action.payload
            })
    }
});


const { getUser } = userSlice.actions;


const selectUser = ({ users }: UserSelectorProps): Array<User> => users || []
const selectUserStatus = ({ status }: UserSelectorProps) => status || 'idle'

const userSliceReducer = userSlice.reducer;

export {
    userSliceReducer,
    getUser,
    selectUser,
    selectUserStatus,
    getUserAsync
}