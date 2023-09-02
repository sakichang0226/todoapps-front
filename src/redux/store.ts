import { configureStore } from '@reduxjs/toolkit';
import { modalSlice, deleteDialogSlice }  from './slice/common';

export const store = configureStore({
  reducer: {
    modal: modalSlice.reducer,
    dialog: deleteDialogSlice.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch
