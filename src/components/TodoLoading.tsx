import React from 'react';
import { Container,Box,CircularProgress } from '@mui/material';

const TodoLoading = () => {
  return (
      <Container 
        sx={{
            display: "flex",
            alignItems: 'center',
            justifyContent: 'center',
            flexWrap: 'wrap', 
            minHeight: '650px',
            my: 1
        }}
      >
        <Box><CircularProgress /></Box>
      </Container>
    );
}
export default TodoLoading;