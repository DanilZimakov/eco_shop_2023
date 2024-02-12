import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { ActionAuth } from "../../../types/enum/Action";
import * as api from "../../../App/api/auth";
import { SignInType, SignUpType } from "../../../types/auth/authTypes";
import { initialAuthType } from "../../../types/initialState/initialState";
const initialState: initialAuthType = {
  user: undefined,
  error: undefined,
};
export const signUp = createAsyncThunk(
  ActionAuth.AUTH_SIGN_UP,
  (data: SignUpType) => api.axiosSignUp(data)
);
export const signIn = createAsyncThunk(
  ActionAuth.AUTH_SIGN_IN,
  (data: SignInType) => api.axiosSingIn(data)
);
export const logout = createAsyncThunk(ActionAuth.AUTH_LOGOUT, () =>
  api.axiosLogout()
);
export const check = createAsyncThunk(ActionAuth.AUTH_CHECK, () =>
  api.axiosCheckAuth()
);

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
      .addCase(signIn.rejected, (state, action) => {
        console.log(action.error.message);

        state.error = action.error.message;
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
