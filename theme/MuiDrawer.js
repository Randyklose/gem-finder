import { createMuiTheme } from '@material-ui/core/styles';

const baseTheme = createMuiTheme();

export const MuiDrawerOverrides = {
  paper: {
    minWidth: '290px',
    [baseTheme.breakpoints.up('sm')]: {
      minWidth: '320px',
    },
    [baseTheme.breakpoints.up('lg')]: {
      minWidth: '360px',
    },
  },
};
