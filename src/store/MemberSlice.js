import {createSlice} from '@reduxjs/toolkit';

const MemberSlice = createSlice({
    name: 'member',
    initialState: {
        token: ""
    },
    reducers: {
        saveToken: (state, action) => {
            state.token = action.payload;
        },
        deleteToken: () => ({
            token: ""
        }),
    }
});

export let {saveToken, deleteToken} = MemberSlice.actions;

export default MemberSlice;