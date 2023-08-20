import React from 'react';
import { Card,Typography,CardHeader,CardContent } from '@mui/material';
import style from "../css/TodoCard.module.css"
import TodoCardProps from "../interface/TodoCardProps"

function TodoCard(props: TodoCardProps) {
  
  return (
    <>
      <Card className={style.card} sx={{ margin : 1 }}>
        <CardHeader 
          title={props.title}
          titleTypographyProps={{ textAlign: "left" }}
        />
        <CardContent>
          <Typography component="div">
            {props.created_at}/{props.updated_at} 
          </Typography>
          <Typography className={style.card_content} component="p" sx={{ my : 1 }}>
            {props.content}
          </Typography>
        </CardContent>
        <CardContent>
          <Typography align="right">詳細を見る</Typography>
        </CardContent>
      </Card>
    </>
  );
}
export default TodoCard