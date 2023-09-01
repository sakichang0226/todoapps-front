import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';

interface ModalInfo {
  isOpen: boolean;
}

const initialState: ModalInfo = {
  isOpen: false
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state: ModalInfo) => {
      state.isOpen = true;
    },
    close: (state: ModalInfo) => {
      state.isOpen = false;
    }
  }
});

export const { open, close } = modalSlice.actions;
export const isOpenModal = (state: RootState) => state.modal.isOpen;

export default modalSlice.reducer;