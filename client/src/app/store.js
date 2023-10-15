import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import signupReducer from "../slices/signupSlice";

export default configureStore({
    reducer: {
        user: userReducer,
        signup: signupReducer,
    },
    });