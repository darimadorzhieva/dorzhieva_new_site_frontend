import React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import { Toolbar, Typography } from '@mui/material';

export default function Header() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News site
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
