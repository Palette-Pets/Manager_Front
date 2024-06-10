import {configureStore, combineReducers} from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist";
import TestSlice from "./TestSlice.jsx";
import MemberSlice from "./MemberSlice.js";

const reducers = combineReducers({
    TestSlice : TestSlice.reducer,
    MemberSlice : MemberSlice.reducer,
});

const persistConfig = {
    key: 'root',
    storage, // 기본 설정 localStorage
    whitelist: ['TestSlice', 'MemberSlice'],
}

const persistedReducers = persistReducer(persistConfig, reducers);

export default configureStore({
    reducer: persistedReducers
})