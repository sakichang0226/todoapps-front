import React from 'react';
import { Container,Grid } from '@mui/material';
import TodoCard from "../components/TodoCard"
import TodoCardProps from "../interface/TodoCardProps"
import style from "../css/TodoCardList.module.css";

function TodoCardList(todos : Array<TodoCardProps>) {
  return (
    <>
      <Container sx={
          { 
            display: "flex",
            alignItems: 'center', 
            flexWrap: 'wrap', 
            minHeight: '650px',
            my: 1
          }
        } 
        className="style.card_list_container"
      >
          { Object.values(todos).map((todo) => {
            return <TodoCard key={todo.id} { ...todo } />; 
          })}
      </Container>
    </>
  );
}
export default TodoCardList;