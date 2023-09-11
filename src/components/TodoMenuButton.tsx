import React from 'react';
import { useState } from 'react';
import { IconButton, Menu, MenuItem, Divider, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import CreateIcon from '@mui/icons-material/Create';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import LoginIcon from '@mui/icons-material/Login';
import TodoMenuProps from '../interface/TodoMenuProps';
import { useAppDispatch } from '../redux/hooks';
import { open } from '../redux/actions/modal';

function TodoMenuButton(props: TodoMenuProps){
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const isOpen = Boolean(anchorEl);
  const dispatch = useAppDispatch();
  
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  
  return (
    <>
      <IconButton
        size="large"
        edge="end"
        color="inherit"
        aria-label="menu"
        onClick={handleClick}
        sx={{ margin : 1 }}
      >
        <MenuIcon />
      </IconButton>
      <Menu 
        open={isOpen}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
         vertical: "bottom",
         horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center"
        }}
        style={{'width': "220px"}}
      >
        {props.isLogin ?
          <>
            <MenuItem>{props.userName}</MenuItem>
            <Divider />
            <MenuItem onClick={ ()=> dispatch(open()) }>
              <CreateIcon sx={{ mr : 1 }}/>
              <Typography variant='body1'>Create Todo</Typography>
            </MenuItem> 
            <Divider />
            <MenuItem>
              <ExitToAppIcon sx={{ mr : 1 }}/>
              <Typography variant='body1'>Sign Out</Typography>
            </MenuItem>
          </>
          :
          <>
            <MenuItem>
              <LoginIcon sx={{ mr : 1 }}/>
              <Typography variant='body1'>Sign In</Typography>
            </MenuItem>
          </>
        }
        
      </Menu>
    </>
    );
}
export default TodoMenuButton;