import { configureStore } from "@reduxjs/toolkit"
import { combineReducers } from '@reduxjs/toolkit'

import counterReducer from '../features/counter/counterSlice'
import logedReducer from '../features/loged/logedSlice'

const rootReducer =  combineReducers({
  counter: counterReducer,
  loged: logedReducer
})

export const store = configureStore({ reducer: rootReducer })