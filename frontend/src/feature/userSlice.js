import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
    name: "user",
    initialState: {
        value: {},
    },
    reducers: {
        login: (state, action) => {
            state.value = {
                userName: action.payload.userName,
                photo: action.payload.photo,
                email: action.payload.email,
                uid: action.payload.uid,
            };
        },
        logout: (state) => {
            state.value = null;
        },
    },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
