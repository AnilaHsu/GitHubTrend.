import { createSlice } from "@reduxjs/toolkit";

const initialState = {loginInfo:{login:false},userMenu:""}
export const userSlice = createSlice({
    name:"user",
    initialState:{ value:initialState },
    reducers:{   
        login:(state, action) => {
            state.value.loginInfo = action.payload;
        },
        logout:(state, action) => {
            state.value.loginInfo = action.payload;
        },
        selectMenu:(state, action) => {
            state.value.userMenu = action.payload;
        }
    }
})

export const { login, logout, selectMenu } = userSlice.actions;
export default userSlice.reducer;