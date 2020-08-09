import React from 'react'
import { AppBar, Toolbar, Typography, IconButton, Button } from '@material-ui/core';
import { Menu } from '@material-ui/icons';

import Link from 'next/link';

export const NavBar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu">
                <Menu />
                </IconButton>
                <Typography variant="h6">
                    <Link href='#'>Home</Link>
                    <Link href='#'>About</Link>    </Typography>
                <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>
    )
}
