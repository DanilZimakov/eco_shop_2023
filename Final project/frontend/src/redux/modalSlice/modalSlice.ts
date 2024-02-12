import { createSlice } from "@reduxjs/toolkit";
import { InitialModal } from "../../types/initialState/initialState";
import { ActionModal } from "../../types/enum/Action";

const initialState: InitialModal = {
  modal: false,
};

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    [ActionModal.OPEN_MODAL]: (state) => {
      state.modal = true;
    },
    [ActionModal.CLOSE_MODAL]: (state) => {
      state.modal = false;
    },
  },
});

export const { OPEN_MODAL, CLOSE_MODAL } = modalSlice.actions;

export default modalSlice.reducer;
