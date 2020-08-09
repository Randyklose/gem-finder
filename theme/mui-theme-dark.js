import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';
import merge from 'deepmerge';

import { baseTheme } from './mui-theme-base';

const {
  tokens: { color, opacity },
} = baseTheme;

const DARK_BACKGROUND = color.gray.onyx;

const darkTheme = merge(baseTheme, {
  themeName: 'Bigstock Dark',
  palette: {
    type: 'dark',
    background: {
      default: DARK_BACKGROUND,
    },
    primary: {
      main: color.white,
    },
    secondary: {
      main: color.white,
    },
    info: {
      main: color.blue.aqua,
    },
    success: {
      main: color.green.jungle,
    },
    warning: {
      main: color.yellow.amber,
    },
    border1Color: `rgba(255, 255, 255, ${opacity['20']})`,
  },
  overrides: {
    MuiCard: {
      root: {
        backgroundColor: DARK_BACKGROUND,
      },
    },
    MuiPaper: {
      root: {
        backgroundColor: DARK_BACKGROUND,
      },
    },
  },
});

// For optimal SSR performance we compute the initial theme at build time
export const muiThemeDark = responsiveFontSizes(createMuiTheme(darkTheme));
