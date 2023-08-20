import React from 'react';
import { Container,Grid } from '@mui/material';
import TodoCard from "../components/TodoCard"
import TodoCardProps from "../interface/TodoCardProps"

function TodoCardList(todos : Array<TodoCardProps>) {
  return (
    <>
      <Grid container>
          { Object.values(todos).map((todo) => {
            return <TodoCard key={todo.id} { ...todo } />; 
          })}
      </Grid>
    </>
  );
}
export default TodoCardList;