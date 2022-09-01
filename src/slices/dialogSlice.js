import { createSlice } from "@reduxjs/toolkit";

const initialState = {open:false,option:""}
export const dialogSlice = createSlice({
    name:"dialog",
    initialState:{ value:initialState },
    reducers:{
        openDialog:(state, action) => {
            state.value.open = action.payload;
        },
        closeDialog:(state, action) => {
            state.value.open = action.payload;
        },
        selectMenu:(state, action) => {
            state.value.option = action.payload;
        }

        
    }
})

export const { openDialog, closeDialog, selectMenu } = dialogSlice.actions;
export default dialogSlice.reducer;