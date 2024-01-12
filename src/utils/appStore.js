import { configureStore } from "@reduxjs/toolkit"
import formDataSlice from "./formDataSlice"

const appStore = configureStore({
    reducer: {
        formData: formDataSlice
    }
})

export default appStore