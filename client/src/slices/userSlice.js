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
        },
        setUser: (state, action) => {
            return action.payload;
        },
        updateUser: (state, action) => {
            state.profile = action.payload;
          },
        clearUser: (state) => {
            state.user = null;
        }
    }
});

export const {login, logout, setUser, clearUser, updateUser} = userSlice.actions; 

export const selectUser = (state) => state.user.user;

export default userSlice.reducer;
