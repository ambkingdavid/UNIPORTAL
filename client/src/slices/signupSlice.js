import {createSlice} from '@reduxjs/toolkit';

// Create a slice of the application state
export const signupSlice = createSlice({
    name: 'signup', // Name of the slice
    initialState: {
        signup: null
    },
    reducers: { // Reducers are functions that allow us to update the state
        signup: (state, action) => {
            state.signup = action.payload;
        },
        cancel: (state) => {
            state.signup = null;
        }
    }
});

export const {signup, cancel} = signupSlice.actions; 

export const selectUser = (state) => state.signup.signup;

export default signupSlice.reducer;
