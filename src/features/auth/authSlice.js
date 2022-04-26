import { createSlice } from "@reduxjs/toolkit"

import {   
    login as _login, 
    register as _register, 
    logout as _logout
} from "../../services/UserService"

const initialState = {
    user: {                
    }
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login : (state, action) => {
            console.log("Redux: login req:" + JSON.stringify(action))            
            
            _login(action.payload.name, action.payload.password);                        
        },
        logout : (state) => {
            console.log("Redux: logou:")

            state.user = {}
        },
        register: (state, action) => {
            console.log("Redux: register req:" + JSON.stringify(action))
            
            _register(action.payload.name, action.payload.password);
        }
    }
})

export const { login, register, logout } = authSlice.actions;

export default authSlice.reducer; 