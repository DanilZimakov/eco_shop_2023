import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Action } from "../../types/enum/Action";
import * as api from "../../App/api/api";
import { SignInType, SignUpType } from "../../types/auth/authTypes";
import { initialAuthType } from "../../types/store/store";
const initialState: initialAuthType = {
  user: undefined,
};
export const signUp = createAsyncThunk(
  Action.AUTH_SIGN_UP,
  (data: SignUpType) => api.axiosSignUp(data)
);
export const signIn = createAsyncThunk(
  Action.AUTH_SIGN_IN,
  (data: SignInType) => api.axiosSingIn(data)
);
export const logout = createAsyncThunk(Action.AUTH_LOGOUT, api.axiosLogout);
export const check = createAsyncThunk(Action.AUTH_CHECK, api.axiosCheckAuth);

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builer) => {
    builer
      .addCase(signUp.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(signIn.fulfilled, (state, action) => {
        state.user = action.payload;
      })
      .addCase(logout.fulfilled, (state) => {
        state.user = undefined;
      })
      .addCase(check.fulfilled, (state, action) => {
        state.user = action.payload;
      });
  },
});

export default authSlice.reducer;
