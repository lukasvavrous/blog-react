import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from '@reduxjs/toolkit'

import authReducer from '../features/auth/authSlice'

const rootReducer =  combineReducers({
  loged: authReducer
})

export const store = configureStore({ reducer: rootReducer })