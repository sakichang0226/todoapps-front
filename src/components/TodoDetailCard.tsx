import React from 'react';
import { 
        Card,
        Typography,
        CardHeader,
        CardContent,
        FormControl,
        TextField,
        Button
      } from '@mui/material';

const TodoDetailCard = () => {
  return(
    <>
      <Card sx={{ maxWidth: "650px" }}>
        <CardHeader 
          title={"Getting Started"}
          titleTypographyProps={{ textAlign: "left" }}
        />
        <CardContent>
          <Typography component="div">
            {"4 Feb 2022"}/{"4 Feb 2022"} 
          </Typography>
          <TextField 
              multiline
              fullWidth={true}
              defaultValue="Default Value"
            />
          <Button 
            variant="contained"
            fullWidth
            sx={{ mt: 1 }}
          >POST</Button>
        </CardContent>
        
      </Card>
    </>
  );
}
export default TodoDetailCard