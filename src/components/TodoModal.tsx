import React from 'react';
import { Modal } from '@mui/material';
import TodoDetailCard from './TodoDetailCard';
import TodoModalProps from '../interface/TodoModalProps';
import { useAppSelector, useAppDispatch } from '../redux/hooks';
import { close } from '../redux/slice/common';

const TodoModal = (props: TodoModalProps) => {
  
  const isOpen = useAppSelector(state => state.modal.isOpen);
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
        <TodoDetailCard {...props.todo} />
      </Modal>
    </>
    )
}
export default TodoModal;