import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userSlice";
import signupReducer from "../slices/signupSlice";
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
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default configureStore({
  reducer: persistedReducer,
});

// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../slices/userSlice";
// import signupReducer from "../slices/signupSlice";

// export default configureStore({
//     reducer: {
//         user: userReducer,
//         signup: signupReducer,
//     },
// });
