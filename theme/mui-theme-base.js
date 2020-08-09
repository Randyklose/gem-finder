import { border as borderTokens } from '@sstk/design-tokens/base/border';
import { font as fontTokens } from '@sstk/design-tokens/base/font';
import { opacity as opacityTokens } from '@sstk/design-tokens/base/opacity';
import { size as sizeTokens } from '@sstk/design-tokens/base/size';
import { spacing as spacingTokens } from '@sstk/design-tokens/base/spacing';

import { MuiAutocompleteOverrides } from './MuiAutocomplete';
import { MuiButtonOverrides, MuiButtonProps } from './MuiButton';
import { MuiDrawerOverrides } from './MuiDrawer';
import { MuiGridOverrides } from './MuiGrid';
import { MuiOutlinedInputOverrides } from './MuiInput';
import { MuiSnackbarOverrides } from './MuiSnackbar';
import { MuiTabOverrides } from './MuiTab';
import { MuiTooltipOverrides } from './MuiTooltip';
import { color } from './tokens';
import { typography } from './typography';

const spacingValues = Object.values(spacingTokens).map((value) => Number(value.split('px')[0]));

export const baseTheme = {
  breakpoints: {
    values: {
      // TODO use mediaTokens (doesn't like px), investigate
      xs: 0, // >= 0px
      sm: 600, // >= 600px
      md: 1024, // >= 1024px
      lg: 1280, // >= 1280px
      xl: 1920, // >= 1920px
    },
  },
  /**
   * Global theme override

   * You can take advantage of the overrides key of the theme
   * to potentially change every single style injected
   * by Material-UI into the DOM.
   *
   * Learn more about it in the themes section of the documentation.
   * https://material-ui.com/customization/globals/#css
   *  */
  overrides: {
    MuiAutocomplete: MuiAutocompleteOverrides,
    MuiButton: MuiButtonOverrides,
    MuiGrid: MuiGridOverrides,
    MuiOutlinedInput: MuiOutlinedInputOverrides,
    MuiDrawer: MuiDrawerOverrides,
    MuiTab: MuiTabOverrides,
    MuiSnackbar: MuiSnackbarOverrides,
    MuiTooltip: MuiTooltipOverrides,
  },
  props: {
    ...MuiButtonProps,
  },
  spacing: [0, ...spacingValues],
  typography,
  tokens: {
    color,
    border: borderTokens,
    fontSize: fontTokens.size,
    fontWeight: fontTokens.weight,
    lineHeight: fontTokens['line-height'],
    radius: borderTokens.radius,
    size: sizeTokens,
    spacing: spacingTokens,
    opacity: opacityTokens,
  },
};
