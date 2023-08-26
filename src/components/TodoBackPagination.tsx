import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TodoPaginationProps from '../interface/TodoPaginationProps';

function TodoBackPagination(props: TodoPaginationProps) {
  
  return(
    <>
      <IconButton 
        sx={{
          "width": "40px",
          "height": "40px"
        }}
        disabled={ !props.exclusiveStartKey ? true : false } 
      >
        <ArrowBackIosNewIcon color={ props.exclusiveStartKey ? "action" : "disabled" }/>
      </IconButton>
    </>
    );
  
}
export default TodoBackPagination;