import React from 'react';
import { AppBar, Toolbar, Typography, IconButton, Button, Box, makeStyles } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import Link from 'next/link';

const useStyles = makeStyles(({ tokens: { spacing, color } }) => ({
  container: {
    backgroundColor: color.blue.aqua.value,
  },
}));

export const NavBar = () => {
  const classes = useStyles();
  return (
    <AppBar className={classes.container} position="static">
      <Toolbar variant="regular">
        <IconButton edge="start" color="inherit" aria-label="menu">
          <Menu />
        </IconButton>
        <Box display="flex" justifyContent="flex-start" flexGrow={1}>
          <Button>
            <Typography variant="h6">Home</Typography>
          </Button>
          <Button>
            <Typography variant="h6">Blog</Typography>
          </Button>
          <Button>
            <Typography variant="h6">About</Typography>
          </Button>
        </Box>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  );
};
