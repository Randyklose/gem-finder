import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import merge from 'deepmerge';

import { baseTheme } from './mui-theme-base';

const {
  tokens: { color },
} = baseTheme;

const lightTheme = merge(baseTheme, {
  themeName: 'Bigstock Light',
  palette: {
    type: 'light',
    primary: {
      main: color.black,
    },
    secondary: {
      main: color.black,
    },
    info: {
      main: color.blue.azure,
    },
    success: {
      main: color.green.jungle,
    },
    warning: {
      main: color.yellow.amber,
    },
    background: {
      default: color.white,
    },
    border1Color: color.gray['onyx-12'],
  },
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: color.white,
        '&:hover': {
          backgroundColor: color.gray['onyx-87'],
        },
      },
    },
  },
});

// For optimal SSR performance we compute the initial theme at build time
export const muiThemeLight = responsiveFontSizes(createMuiTheme(lightTheme));
