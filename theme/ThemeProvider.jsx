import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { muiThemeLight } from './mui-theme-light';

export const ThemeProvider = ({ children, theme = muiThemeLight }) => {
  return <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>;
};
