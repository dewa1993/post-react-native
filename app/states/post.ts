import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchPosts } from '../api/postAPI';

interface PostSelectorProps {
    status: 'idle' | 'loading' | 'failed';
    posts: Array<Post>
}

const initialState: PostSelectorProps = {
    posts: [],
    status: 'idle'
}

const getPostAsync = createAsyncThunk('post/fetch', async () => {
    const response = await fetchPosts()
    return response;
})

/**
 * auth reducer handler
 * @param {Object} state - redux state
 * @param {Object} action - type and payload
 */

const getPostReducer = (
    state: PostSelectorProps,
    action: PayloadAction<PostSelectorProps>,
): void => {
    state.posts = action.payload.posts;
    state.status = action.payload.status;
};


// REDUCER 
const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        getPost: getPostReducer,
    },
    extraReducers: (builder) => {
        builder.addCase(getPostAsync.pending, (state) => {
            state.status = 'loading'
        })
            .addCase(getPostAsync.fulfilled, (state, action) => {
                state.status = 'idle';
                state.posts = action.payload
            })
    }
});


const { getPost } = postSlice.actions;


const selectPosts = ({ posts }: PostSelectorProps): Array<Post> => posts || []
const selectStatus = ({ status }: PostSelectorProps) => status || 'idle'

const postsliceReducer = postSlice.reducer;

export {
    postsliceReducer,
    getPost,
    selectPosts,
    getPostAsync,
    selectStatus
}