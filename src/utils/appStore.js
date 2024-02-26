import { configureStore } from "@reduxjs/toolkit"
import formDataSlice from "./formDataSlice"
import moneyDetailsSlice from "./moneyDetailsSlice"
import receiverSlice from "./receiverSlice"
import personalSlice from "./personalSlice"

const appStore = configureStore({
    reducer: {
        formData: formDataSlice,
        moneyData: moneyDetailsSlice,
        receiverData: receiverSlice,
        personalData: personalSlice
    }
})

export default appStore