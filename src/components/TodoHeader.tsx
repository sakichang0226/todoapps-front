import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import TodoMenuButton from './TodoMenuButton';

function TodoHeader() {
  return(
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Todo Apps</Typography>
          <TodoMenuButton/>
        </Toolbar>
      </AppBar>
    </>
    );
}
export default TodoHeader;