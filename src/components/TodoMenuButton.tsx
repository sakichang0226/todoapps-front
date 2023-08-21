import React from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

function TodoMenuButton(){
  return (
    <>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>
      <Menu 
        open={true}
        sx={{ mt: '45px', mx: 1 }}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>test</MenuItem>
      </Menu>
    </>
    );
}
export default TodoMenuButton;