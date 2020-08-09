import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button, Box } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import Link from 'next/link';

export const NavBar = () => {
    return (
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton edge="start" color="inherit" aria-label="menu">
            <Menu />
          </IconButton>
          <Box display="flex">
            <Typography variant="h6">
              <Link href="#">Home</Link>
            </Typography>
            <Typography variant="h6">
              <Link href="#">About</Link>
            </Typography>
          </Box>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    );
}
