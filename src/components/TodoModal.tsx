import React from 'react';
import { Modal } from '@mui/material';
import TodoDetailCard from './TodoDetailCard';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { close } from '../redux/actions/modal';

const TodoModal = () => {
  
  const isOpen = useAppSelector(state => state.modal.isOpen);
  const todo = useAppSelector(state => state.modal.todo);
  const dispatch = useAppDispatch();
  
  const handleClose = () => {
    dispatch(close());
  }
  
  return(
    <>
      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <TodoDetailCard todo={todo} />
      </Modal>
    </>
    )
}
export default TodoModal;