/**
 * MUI Tab x Shutterstock.com Theme
 *
 * Override keys: https://material-ui.com/api/tab/#css
 */

import { spacing } from './tokens';

export const presets = {
  inlineTabIcon: {
    // Switch icon + label from stacked to inline
    '& .MuiTab-wrapper': {
      display: 'flex',
      flexDirection: 'row',
    },
    // Remove default bottom spacing of the icon
    // Allows the icon to center using flex
    '& .MuiTab-wrapper > *:first-child': {
      marginBottom: 0,
      marginRight: spacing.s,
    },
  },
};

export const MuiTabOverrides = {
  root: {
    textTransform: 'none',
    '&.Mui-selected': {
      fontWeight: 'bold',
    },
  },
};
