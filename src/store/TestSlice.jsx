import {createSlice} from '@reduxjs/toolkit';

const TestSlice = createSlice({
    name: 'TestSlice',
    initialState: {
        id: "",
        name: "",
        role: "",
    },
    reducers: {
        changeRole: (state, action) => {
            state.role = action.payload;
        },
        deleteTestSlice: () => ({
            id: "",
            name: "",
            role: "",
        }),
    }
});

export let {changeRole, deleteTestSlice} = TestSlice.actions;

export default TestSlice;