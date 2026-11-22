import { configureStore } from "@reduxjs/toolkit";
import { theme } from "./Slices/Themes/themeSlice";

export const store=configureStore({
    reducer:{
        theme:theme.reducer
    }
})