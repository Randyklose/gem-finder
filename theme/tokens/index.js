import borderTokens from './border';
import { color } from './color';
import fontTokens from '.abs/font';
import opacityTokens from './opacity';
import sizeTokens from './size';
import spacingTokens from './spacing';

const colorTokens = {
    ...color,
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