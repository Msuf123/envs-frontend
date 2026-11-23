import { createSlice } from "@reduxjs/toolkit";

export const theme=createSlice({
    name:"theme",
    initialState:{
        backGroundColor:"#0c0c0c",
        backGroundColorElement:"#1d1d1d",
        lightElementColor:"#6d6d6d",
        logoColor:"brightness(0) invert(1)"
        
    }
})