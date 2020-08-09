/**
 * MUI Card x Shutterstock.com Theme
 * Exports an object to be passed into createMuiTheme()
 *
 * Override keys: https://material-ui.com/api/card/#css
 *
 * -- These values match Studio components' design spec, but have no ties to design-tokens
 * -- Please do not expose these values for use outside of this file
 * -- We will revisit updating both Studio and these in the future to align the component
 *    specs globally with the Shutterstock Design System
 *
 * ALSO: Color values should not be present in this base theme
 * -- Those values may be added to a color theme, ex: mui-theme-light, mui-theme-dark
 */

import { color, opacity } from './tokens';

export const presets = {
  cardOverlay: {
    '& .MuiCardContent-root': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: color.white,
      position: 'absolute',
      top: 0,
      height: '100%',
      width: '100%',
      background: `rgba(0, 0, 0, ${opacity['20']})`,
      // TODO add from theme tokens when available
      transition: 'background .3s ease-in-out',

      '&:hover': {
        background: 'rgba(0, 0, 0, 0)',
      },

      // Specificity is required when building for production
      '&:last-child': {
        padding: 0,
      },
    },
  },
};
