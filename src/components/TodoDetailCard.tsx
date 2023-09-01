import React from 'react';
import { 
        Card,
        Typography,
        CardHeader,
        CardContent,
        FormControl,
        TextField,
        Input,
        Button
      } from '@mui/material';
import TodoCardProps from '../interface/TodoCardProps';

const TodoDetailCard = (props: TodoCardProps) => {
  return(
    <>
      <Card sx={{ 
        maxWidth: "650px",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)'
      }}>
        <Input 
          sx={{ display: "none" }}
          defaultValue={props.id}
        />
        <CardHeader 
          title={
            <TextField 
              variant="standard" 
              defaultValue={props.title}
              inputProps={{style: {fontSize: "24px"}}} 
            />
          }
          titleTypographyProps={{ 
            textAlign: "left"
          }}
        />
        <CardContent>
          <Typography 
            component="h6" 
            align="right"
            sx={{ mb:"33px" }}
          >
            {props.created_at}/{props.updated_at} 
          </Typography>
          <TextField 
              multiline
              fullWidth={true}
              defaultValue={props.content}
              rows={5}
            />
          <Button 
            variant="contained"
            fullWidth
            sx={{ mt: 4, p: "16px" }}
          >POST</Button>
        </CardContent>
      </Card>
    </>
  );
}
export default TodoDetailCard