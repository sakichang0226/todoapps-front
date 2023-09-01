import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';
import TodoMenuButton from './TodoMenuButton';
import TodoHeaderProps from '../interface/TodoHeaderProps';

function TodoHeader(props: TodoHeaderProps) {

  return(
    <>
      <AppBar position="relative">
        <Toolbar>
          <Typography sx={{ flexGrow: 1 }}>Todo Apps</Typography>
          <TodoMenuButton 
            {...props.menuProps}
          />
        </Toolbar>
      </AppBar>
    </>
    );
}
export default TodoHeader;