import { configureStore } from "@reduxjs/toolkit";
import reducer from '../Reducer/MainReducer'
import { apiCall } from "./middleware/apiCall";
export const store=configureStore({
    reducer:{
        array:reducer
    },
    middleware:[
        apiCall
    ]
})