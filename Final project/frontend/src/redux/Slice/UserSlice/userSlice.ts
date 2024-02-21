import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialUserProfile } from "../../../types/initialState/initialState";
import { ActionProfile } from "../../../types/enum/Action";
import { UserEdit } from "../../../App/api/user";
import * as api from "../../../App/api/user"

const initialUserProfile: InitialUserProfile = {
    userProfile: undefined,
}
export const addUserProfile = createAsyncThunk(ActionProfile.ADD_USER_PROFILE, (data:UserEdit) => api.editProfileUser(data));
export const loadUserProfile = createAsyncThunk(ActionProfile.LOAD_USER_PROFILE, () => api.loadProfileUser())

const userSlice = createSlice({
    name: "user",
    initialState: initialUserProfile,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(addUserProfile.fulfilled, (state, action) => {
                state.userProfile = action.payload
            })
            .addCase(loadUserProfile.fulfilled, (state, action) => {
                state.userProfile = action.payload
            })
    }
})
export default userSlice.reducer