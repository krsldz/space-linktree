import { createSlice } from '@reduxjs/toolkit';

export type ModalType = {
  isOpen: boolean;
};

const initialState: ModalType = {
  isOpen: false,
};

export const modalSlice = createSlice({
  initialState,
  name: 'modal',
  reducers: {
    closeModal(state): ModalType {
      return {
        ...state,
        ...initialState,
      };
    },
    openModal(state): ModalType {
      return {
        ...state,
        isOpen: true,
      };
    },
  },
});

export const { openModal, closeModal } = modalSlice.actions;

export default modalSlice.reducer;
