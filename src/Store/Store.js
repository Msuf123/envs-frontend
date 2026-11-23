import { configureStore } from "@reduxjs/toolkit";
import { theme } from "./Slices/Themes/themeSlice";
import { workSpace } from "./Slices/WorkSpace/workSpaceSlice";

export const store=configureStore({
    reducer:{
        theme:theme.reducer,
        workspaces:workSpace.reducer
    }
})