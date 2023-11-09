// import { createSlice } from '@reduxjs/toolkit';

// // Create a slice of the application state
// export const registrationSlice = createSlice({
//   name: 'registration', // Name of the slice
//   initialState: {
//     registrationStatus: null,
//   },
//   reducers: {
//     registerCourses: (state, action) => {
//       state.registrationStatus = action.payload;
//     },
//   },
// });

// export const { registerCourses } = registrationSlice.actions;

// export const selectRegistrationStatus = (state) => state.registration.registrationStatus;

// export default registrationSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


// Define the async thunk
export const registerCourse = createAsyncThunk('registration/registerCourse', async (data) => {
    try {
      const response = await axios.post('http://localhost:1245/student/registerCourse', data, { withCredentials: true });
      return response.data;
    } catch (error) {
      throw new Error(error.message);
    }
  });

// Create a slice of the application state
export const registrationSlice = createSlice({
  name: "registration",
  initialState: {
    registrationStatus: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerCourse.pending, (state) => {
        state.registrationStatus = "pending";
      })
      .addCase(registerCourse.fulfilled, (state, action) => {
        state.registrationStatus = "fulfilled";
        // You can access the response data from action.payload
      })
      .addCase(registerCourse.rejected, (state, action) => {
        state.registrationStatus = "rejected";
        // You can access the error message from action.error.message
      });
  },
});

// Export the async thunk, selectors, and reducer
//export { registerCourses, selectRegistrationStatus } = registrationSlice.actions;
export default registrationSlice.reducer;
