import { clickReducer } from "./reducers/click.reducer";
import { configureStore } from "@reduxjs/toolkit";


export const store = configureStore({
    reducer: {
        clickReducer
    }
})