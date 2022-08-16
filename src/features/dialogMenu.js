import { createSlice } from "@reduxjs/toolkit";

const initialState = false
export const dialogSlice = createSlice({
    name:"dialog",
    initialState:{ value:initialState },
    reducers:{
        openDialog:(state, action) => {
            state.value = action.payload;
        },
        closeDialog:(state, action) => {
            state.value = action.payload;
        }
        
    }
})

export const { openDialog, closeDialog } = dialogSlice.actions;
export default dialogSlice.reducer;