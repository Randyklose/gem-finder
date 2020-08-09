import { fontWeight, radius, spacing } from './tokens';

// Overriding Alerts within the context of a Snackbar
export const MuiSnackbarOverrides = {
  root: {
    '& .MuiAlert-root': {
      padding: spacing.m,
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: fontWeight.bold,
      borderRadius: radius.xl,
      '& .MuiAlert-action': {
        paddingLeft: spacing.xl,
      },
    },
  },
};
