import { createSlice } from "@reduxjs/toolkit";

const suggestionSlice=createSlice({
    name:"suggestion",
    initialState:{

    },
    reducers:{
        cacheSuggestions:(state,action)=>{
            state=Object.assign(state,action.payload)
        }
    }
})

export const {cacheSuggestions} = suggestionSlice.actions;

export default suggestionSlice.reducer;