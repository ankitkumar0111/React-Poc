import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    firstName: null,
    lastName: null,
    mobileNumber: null
};

const receiverSlice = createSlice({
    name: 'receiverData',
    initialState,
    reducers: {
        updateReceiverData: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

export const { updateReceiverData } = receiverSlice.actions;
export default receiverSlice.reducer;