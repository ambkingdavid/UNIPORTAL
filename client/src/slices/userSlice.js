import {createSlice} from '@reduxjs/toolkit';

// Create a slice of the application state
export const userSlice = createSlice({
    name: 'user', // Name of the slice
    initialState: {
        user: null
    },
    reducers: { // Reducers are functions that allow us to update the state
        login: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = null;
        }
    }
});

export const {login, logout} = userSlice.actions; 

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;