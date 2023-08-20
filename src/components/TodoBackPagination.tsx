import React from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import TodoPaginationProps from '../interface/TodoPaginationProps';

function TodoBackPagination(props: TodoPaginationProps) {
  
  return(
    <div>
      <IconButton disabled={ !props.exclusiveStartKey ? true : false } >
        <ArrowBackIosNewIcon color={ props.exclusiveStartKey ? "action" : "disabled" }  />
      </IconButton>
    </div>
    );
  
}
export default TodoBackPagination;