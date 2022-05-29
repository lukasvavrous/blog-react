import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"

import { login as api_login } from '../../services/UserService'

import {   
    login as _login, 
    register as _register, 
    logout as _logout
} from "../../services/UserService"

const initialState = {    
    user: {}
}

export const logedSlice = createSlice({
    name: 'loged',
    initialState,
    reducers: {
        login : (state, action) => {
            console.log("Redux: login req:" + JSON.stringify(action))
            
            state.user = action.payload
            console.log("Redux after login state:" + JSON.stringify(state))

            return state;
        },
        logout : (state) => {
            console.log("Redux: logou:")

            state.user = {}
        },
        getUser: (state) => {
            return state.user;
        },
        isLoged: (state) => {
            return ( !state.user || Object.keys(state.user) )
        },
        register: (state, action) => {
            console.log("Redux: register req:" + JSON.stringify(action))
            
            state.user = action.payload
            console.log("Redux after login state:" + JSON.stringify(state))

            return state;
        }
    }
})

export const { login, logout, getUser, isLoged, register } = logedSlice.actions;

export default logedSlice.reducer; 