import React from 'react';
import { useState, useEffect } from 'react';
import { Container } from '@mui/material';
import { 
  TodoBackPagination, 
  TodoNextPagination,
  TodoLoading,
  TodoCardList,
  TodoModal,
  TodoDeleteDialog
}  from '../components/index';
import TodoCardProps from '../interface/TodoCardProps';

const TodoListPage = () => {
  
  const [backPageOffsetKey,setBackPageOffsetKey] = useState<string>("");
  const [nextPageOffsetKey,setNextPageOffsetKey] = useState<string>("");
  const [todoList, setTodoList] = useState<Array<TodoCardProps>>([]);
  const [isLoading, setLoading] = useState<boolean>(true);
  
  useEffect(()=> {
    fetchTodoList();
  });
  
  const fetchTodoList = () => {
    setTodoList([
        {
          id: "4agb",
          title: "Getting Started",
          created_at: "4 Feb 2022",
          updated_at: "4 Feb 2022",
          content: "It is a long established fact that a reader will be distracted\
            by the readable content of a page when looking at its layout."
        }
      ])
    setTimeout(()=> setLoading(false),1000);
  }
  
  return(
    <>
      <Container
        sx={{ 
          display: "flex", 
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TodoBackPagination 
          exclusiveStartKey={backPageOffsetKey}
        />
        {     
          isLoading ?
          <TodoLoading />
          :
          <>
            <TodoDeleteDialog />
            <TodoModal />
            <TodoCardList 
              {...todoList} 
            />
          </>
        }
        <TodoNextPagination
          exclusiveStartKey={nextPageOffsetKey}
        />
      </Container>
    </>
    );
}
export default TodoListPage;