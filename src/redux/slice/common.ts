import { createSlice } from '@reduxjs/toolkit';
import  TodoCardProps  from '../../interface/TodoCardProps';
import { ModalInfo, DeleteDialogInfo } from '../state/modal';

const initialState: ModalInfo = {
  isOpen: false
}

export const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    open: (state: ModalInfo, action: { payload: TodoCardProps | undefined; }) => {
      state.isOpen = true;
      state.todo = action?.payload;
    },
    close: (state: ModalInfo) => {
      state.isOpen = false;
    }
  }
});

const initialDeleteDialogState: DeleteDialogInfo = {
  isOpen: false,
  key: ""
}

export const deleteDialogSlice = createSlice({
    name: "dialog",
    initialState: initialDeleteDialogState,
    reducers: {
      open: (state: DeleteDialogInfo, action: { payload: string; }) => {
        state.isOpen = true;
        state.key = action.payload
      },
      agree: (state: DeleteDialogInfo) => {
        state.isOpen = false;
      },
      disAgree: (state: DeleteDialogInfo) => {
        state.isOpen = false;
      }
    }
});