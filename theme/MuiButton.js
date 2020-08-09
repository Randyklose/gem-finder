/**
 * MUI Button x Shutterstock.com Theme
 * Exports an object to be passed into createMuiTheme()
 *
 * Override keys: https://material-ui.com/api/button/#css
 *
 * TODO: Cleanup magic number constants
 * -- These values match Studio components' design spec, but have no ties to design-tokens
 * -- Please do not expose these values for use outside of this file
 * -- We will revisit updating both Studio and these in the future to align the component
 *    specs globally with the Shutterstock Design System
 *
 * ALSO: Color values should not be present in this base theme
 * -- Those values may be added to a color theme, ex: mui-theme-light, mui-theme-dark
 */

import { fontSize, radius, size } from './tokens';

const BUTTON_SMALL_PAD_X = '14px';
const BUTTON_MEDIUM_PAD_X = '40px';
const BUTTON_LARGE_PAD_X = '80px';

const common = {
  height: size.density.high,
  borderRadius: radius.l,
  fontWeight: 'bold',
  textTransform: 'none',
};

export const presets = {
  buttonSquared: {
    '&&': {
      fontSize: fontSize.xs,
      lineHeight: fontSize.xs,
      borderRadius: radius.m,
    },
  },
  buttonLink: {
    '&&': {
      height: 'auto',
      minWidth: 0,
      padding: 0,
      fontWeight: 'normal',
      borderRadius: radius.m,
    },
  },
};

const buttonSmall = {
  fontSize: '15px',
  lineHeight: '15px',
  paddingLeft: BUTTON_SMALL_PAD_X,
  paddingRight: BUTTON_SMALL_PAD_X,
};

const buttonMedium = {
  borderRadius: radius.pill,
  paddingLeft: BUTTON_MEDIUM_PAD_X,
  paddingRight: BUTTON_MEDIUM_PAD_X,
};

const buttonLarge = {
  height: size.density.base,
  lineHeight: fontSize.l,
  fontSize: fontSize.l,
  paddingLeft: BUTTON_LARGE_PAD_X,
  paddingRight: BUTTON_LARGE_PAD_X,
};

export const MuiButtonOverrides = {
  root: common,
  containedSizeSmall: buttonSmall,
  outlinedSizeSmall: buttonSmall,
  contained: buttonMedium,
  outlined: buttonMedium,
  containedSizeLarge: buttonLarge,
  outlinedSizeLarge: buttonLarge,
};

export const MuiButtonProps = {
  MuiButton: {
    disableElevation: true,
  },
};
