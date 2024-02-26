import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    senderCountry: null,
      receiverCountry: null,
      senderCurrency: null,
      receiverCurrency: null,
      senderMoneyInput: null,
      receiverMoneyInput: null,
};

const moneyDetailsSlice = createSlice({
    name: 'moneyData',
    initialState,
    reducers: {
        updateMoneyData: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }
    }
});

export const { updateMoneyData } = moneyDetailsSlice.actions;
export default moneyDetailsSlice.reducer;