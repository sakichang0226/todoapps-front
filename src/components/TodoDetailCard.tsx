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
import TodoDetailProps from '../interface/TodoDetailProps';

const TodoDetailCard = (props: TodoDetailProps) => {
  return(
    <>
      <Card sx={{ 
        position: 'absolute' as 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 650
      }}>
        <Input 
          sx={{ display: "none" }}
          defaultValue={props.todo?.id}
        />
        <CardHeader 
          title={
            <TextField 
              variant="standard" 
              defaultValue={props.todo?.title}
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
            {props.todo?.created_at} {props.todo?.updated_at} 
          </Typography>
          <TextField 
              multiline
              fullWidth={true}
              defaultValue={props.todo?.content}
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