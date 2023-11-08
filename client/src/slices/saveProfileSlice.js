import {createSlice} from '@reduxjs/toolkit';

// Create a slice of the application state
export const saveProfileSlice = createSlice({
    name: 'save', // Name of the slice
    initialState: {
        save: null
    },
    reducers: { // Reducers are functions that allow us to update the state
        save: (state, action) => {
            state.save = action.payload;
        },
        cancelSave: (state) => {
            state.save = null;
        }
    }
});

export const {save, cancelSave} = saveProfileSlice.actions; 

export const selectUser = (state) => state.save.save;

export default saveProfileSlice.reducer;
