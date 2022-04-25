import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: "pepa"
}

export const logedSlice = createSlice({
    name: 'loged',
    initialState,
    reducers: {
        login : (state, action) => {
            console.log("Redux: login req:" + JSON.stringify(action))
            state.user = action.payload
        },
        logout : (state) => {
            console.log("Redux: logou:")

            state.user = {}
        }
    }
})

export const { login, logout } = logedSlice.actions;

export default logedSlice.reducer; 