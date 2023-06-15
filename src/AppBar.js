import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';

const AppHeader = () => {
  return (
    <AppBar position="absolute">
      <Toolbar>
        <Typography variant="h6" component="div">
          Dummy Graph App
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppHeader;
