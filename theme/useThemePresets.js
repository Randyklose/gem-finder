/**
 * Theme Presets for Material UI
 *
 * What are presets?
 * -- Reusable classNames generated once and stored in the global `theme` object
 * -- A simple mechanism to add custom visual states to components
 *    -- without changing their original API
 *    -- without needing to add additional makeStyles() calls
 * -- An alternative to wrapping a MUI component and adding new props
 *
 * When to use presets:
 * -- If a variant of a MUI component is needed but not covered by the existing API
 * -- If the desired variant is purely visual. Otherwise, consider https://material-ui.com/guides/composition/
 *
 * Consuming presets:
 * -- `import { useTheme } from '@material-ui/core/styles';`
 * -- Run the useTheme hook and retrieve `theme.presets.myCustomPreset`
 * -- The value of myCustomPreset can be applied to the component's `className` prop
 */

import { makeStyles } from '@material-ui/core';

import { presets as buttonPresets } from './MuiButton';
import { presets as cardPresets } from './MuiCard';
import { presets as tabPresets } from './MuiTab';
import { presets as typographyPresets } from './typography';

const presets = {
  ...buttonPresets,
  ...cardPresets,
  ...tabPresets,
  ...typographyPresets,
};

export const useThemePresets = makeStyles(presets);
