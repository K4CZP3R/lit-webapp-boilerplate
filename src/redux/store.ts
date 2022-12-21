import { configureStore } from "@reduxjs/toolkit";
import { clickReducer } from "./reducers/click.reducer";

export const store = configureStore({
    reducer: {
        clickReducer,
    },
});
