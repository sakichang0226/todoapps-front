import { modalSlice, deleteDialogSlice } from '../slice/common';
import { RootState } from '../store';

export const { open, close } = modalSlice.actions;
export const { open: openDeleteDialog, agree, disAgree} = deleteDialogSlice.actions;
  
export const isOpenModal = (state: RootState) => state.modal.isOpen;
export const todo = (state: RootState) => state.modal.todo;
export const isOpenDialog = (state: RootState) => state.dialog.isOpen;
export const key = (state: RootState) => state.dialog.key;