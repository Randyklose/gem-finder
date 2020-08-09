import borderTokens from '@sstk/design-tokens/base/border';
import { color } from '@sstk/design-tokens/base/color';
import fontTokens from '@sstk/design-tokens/base/font';
import opacityTokens from '@sstk/design-tokens/base/opacity';
import sizeTokens from '@sstk/design-tokens/base/size';
import spacingTokens from '@sstk/design-tokens/base/spacing';

const colorTokens = {
  ...color,
  // Custom Enterprise tokens
  gold: '#c7ae5f',
  goldGradient: {
    from: '#e8d568',
    to: '#a38657',
  },
};

export { colorTokens as color };
export const { size: fontSize, weight: fontWeight } = fontTokens.font;
export const { 'line-height': lineHeight } = fontTokens.font;
export const { radius } = borderTokens.border;
export const { size } = sizeTokens;
export const { spacing } = spacingTokens;
export const { opacity } = opacityTokens;
