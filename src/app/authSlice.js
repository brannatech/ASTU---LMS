import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token: {
        id: "",
        username: "",
        password: "",
    }
}

export const authSlice = createSlice({
    name: 'authToken',
    initialState,
    reducers: {
        login: (state, action) => { state.token = action.payload }

    }
})

export const authProvider = (state) => state.authToken;

export const { login } = authSlice.actions
export default authSlice.reducer