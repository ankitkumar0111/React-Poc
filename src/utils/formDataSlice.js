import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    countryCode: null,
    dob: null,
    phoneNumber: null,
  };
  
  const formDataSlice = createSlice({
    name: 'formData',
    initialState,
    reducers: {
      updateFormData: (state, action) => {
        return {
          ...state,
          ...action.payload,
        };
      },
    },
  });

  export const { updateFormData } = formDataSlice.actions;
export default formDataSlice.reducer;