import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { InitialCategoryType} from "../../types/initialState/initialState";
import { ActionCategory } from "../../types/enum/Action";
import * as api from "../../App/api/category"
const InitialCategory:InitialCategoryType = {
    category: []
}
export const loadCategory = createAsyncThunk(ActionCategory.LOAD_CATEGORY, () =>api.fetchCategories())

const categorySlice = createSlice({
    name: "category",
    initialState: InitialCategory,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(loadCategory.fulfilled, (state, action) => {
                state.category = action.payload
            })
    }
})
export default categorySlice.reducer