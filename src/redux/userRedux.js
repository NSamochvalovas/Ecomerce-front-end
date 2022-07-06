import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: "user",
  initialState:{
    curentUser : null,
    isFetching : false,
    error : false,
    text: null,
  },
  reducers:{
    loginStart: (state) => {
      state.isFetching = true;
    },

    loginSucess: (state, action) => {
      state.isFetching = false;
      state.curentUser  = action.payload;
    },

    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
      curentUser = undefined;
    },
    logOut: (state) => {
      state.curentUser=null;
    },
  },
});

export const {loginStart, loginSucess, loginFailure, logOut} = userSlice.actions;
export default userSlice.reducer;