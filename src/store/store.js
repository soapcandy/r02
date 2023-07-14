import { configureStore } from "@reduxjs/toolkit";
import countSlice from "../reducers/countSlice";
import todoSlice from "../reducers/todoSlice";

export default configureStore({
    reducer: { 
        counter: countSlice,
        todo: todoSlice
     }
})

