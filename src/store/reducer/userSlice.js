import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userInfo: localStorage.getItem("userInfo")
};
export const userTaskSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser: (state, action) => {
            if (state.userInfo == null) {
                localStorage.setItem("userInfo", action.payload)
                state.userInfo = localStorage.getItem("userInfo")
            }
        },
        removeUser: (state) => {
            state.userInfo = null;
        }
    }
});
export const { addUser, removeUser} = userTaskSlice.actions;
export const selectTask = (state) => state.user;
export default userTaskSlice.reducer;