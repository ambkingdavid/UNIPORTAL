import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import signupReducer from "../slices/signupSlice";
import saveProfileReducer from "../slices/saveProfileSlice";
import registrationReducer from "../slices/registrationSlice";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["user", "signup"],
};

const rootReducer = combineReducers({
  user: userReducer,
  signup: signupReducer,
  save: saveProfileReducer,
  registration: registrationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
});

