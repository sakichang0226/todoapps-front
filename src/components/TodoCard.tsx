import React from 'react';
import { Card,Typography,CardHeader,CardContent,IconButton,Button } from '@mui/material';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import style from "../css/TodoCard.module.css"
import TodoCardProps from "../interface/TodoCardProps"
import { useAppDispatch } from '../redux/hooks';
import { open,openDeleteDialog } from '../redux/actions/modal';

function TodoCard(props: TodoCardProps) {
  
  const dispatch = useAppDispatch();
  
  return (
    <>
      <Card className={style.card} sx={{ margin : 1 }}>
        <CardHeader 
          title={
            <Typography variant="h5">
              {props.title}
              <IconButton onClick={()=> dispatch(openDeleteDialog(props.id))}>
                <DeleteForeverIcon />
              </IconButton>
            </Typography>
          }
          titleTypographyProps={{ textAlign: "left" }}
        />
        <CardContent>
          <Typography component="div">
            {props.created_at}/{props.updated_at} 
          </Typography>
          <Typography className={style.card_content} component="p" sx={{ mt : 1 }}>
            {props.content}
          </Typography>
        </CardContent>
        <CardContent
          sx={{ 
            display: "flex", 
            justifyContent: 'right'
          }}
        >
          <Button 
            variant="text"
            onClick={()=> dispatch(open(props))}
          >
            詳細を見る
          </Button>
        </CardContent>
      </Card>
    </>
  );
}
export default TodoCard