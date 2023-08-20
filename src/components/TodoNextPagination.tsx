import React from 'react';
import { IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import TodoPaginationProps from '../interface/TodoPaginationProps';

function TodoNextPagination(props: TodoPaginationProps) {
  
  return(
    <div>
      <IconButton disabled={ !props.exclusiveStartKey ? true : false }>
        <ArrowForwardIosIcon color={ props.exclusiveStartKey ? "action" : "disabled" }  />
      </IconButton>
    </div>
    );
  
}
export default TodoNextPagination;