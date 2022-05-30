import { createSlice } from "@reduxjs/toolkit"

import {   
    login as _login, 
    register as _register, 
    logout as _logout
} from "../../services/UserService"

const initialState = {    
    user: JSON.parse(window.localStorage.getItem('user')) || {}
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login : (state, action) => {            
            state.user = action.payload
            window.localStorage.setItem('user', JSON.stringify(state.user));           

            return state;
        },
        logout : (state) => {            
            state.user = {}
            window.localStorage.setItem('user', JSON.stringify(state.user));
        },
        getUser: (state) => {
            return state.user;
        },
        isLoged: (state) => {
            return ( !state.user || Object.keys(state.user) )
        },
        register: (state, action) => {                        
            state.user = action.payload

            window.localStorage.setItem('user', JSON.stringify(state.user));            

            return state;
        }
    }
})

export const { login, logout, getUser, isLoged, register } = authSlice.actions;

export default authSlice.reducer; 