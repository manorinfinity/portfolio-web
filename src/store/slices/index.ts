import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

// RootReducer
const rootReducer = combineReducers({
    counter: counterSlice,
})
export default rootReducer;