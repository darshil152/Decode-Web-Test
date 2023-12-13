import { createSlice } from '@reduxjs/toolkit';

const initialState = {

    state: {
        isFetching: false,
        userRole: false,
    },
    user: {
        isAuthenticated: true,
    },
}


const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setIsFetching: (state) => {
            state.state.isFetching = true;
        },
        setUserRole: (state) => {
            state.state.userRole = true;
        }
    }
});

export const {
    setIsFetching,
    setUserRole,
} = userSlice.actions;


export default userSlice.reducer;