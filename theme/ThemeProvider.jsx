import React from 'react';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { useThemePresets } from '@/theme/useThemePresets';
import { muiThemeLight } from './mui-theme-light';

export const ThemeProvider = ({ children, theme = muiThemeLight }) => {
  const presets = useThemePresets();
  return <MuiThemeProvider theme={{ ...theme, presets }}>{children}</MuiThemeProvider>;
};
