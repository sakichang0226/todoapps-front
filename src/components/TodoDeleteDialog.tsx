import React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { agree, disAgree, isOpenDialog, key as getKey } from '../redux/actions/modal';

const TodoDeleteDialog = () => {
  
  const dispatch = useAppDispatch();
  const isOpen = useAppSelector(isOpenDialog);
  const key = useAppSelector(getKey);

  return (
    <>
      <Dialog
        open={isOpen}
        onClose={()=> dispatch(disAgree())}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"選択したTodoを削除しますか?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>{key}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> dispatch(disAgree())}>Disagree</Button>
          <Button onClick={()=> dispatch(agree())} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
export default TodoDeleteDialog;