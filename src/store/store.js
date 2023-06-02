import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice"
import {musicApi} from './api/musicApi'

export const store = configureStore ({
    reducer: {
        [musicApi.reducerPath]: musicApi.reducer,
        user: userReducer,
        
    },
    middleware: (getDefaultMiddlware) => getDefaultMiddlware().concat(musicApi.middleware)
})