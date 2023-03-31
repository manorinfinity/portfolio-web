import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import mediaQuerySlice from "./mediaQuerySlice";

// RootReducer
const rootReducer = combineReducers({
    counter: counterSlice,
    mediaQuery: mediaQuerySlice,
})
export default rootReducer;