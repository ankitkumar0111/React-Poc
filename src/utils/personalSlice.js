import { createSlice } from "@reduxjs/toolkit";

const initialState = {
};

const personalSlice = createSlice({
    name: 'personalData',
    initialState,
    reducers: {
        updatePersonalData: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

export const { updatePersonalData } = personalSlice.actions;
export default personalSlice.reducer;