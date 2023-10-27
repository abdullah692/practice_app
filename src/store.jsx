import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from "../src/slices/authSlice"


const rootReducer=combineReducers({
    auth:authReducer
})

export const store=configureStore({
    reducer:rootReducer
})