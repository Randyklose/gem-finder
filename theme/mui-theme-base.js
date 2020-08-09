import {
    color,
    border as borderTokens,
    font as fontTokens,
    opacity as opacityTokens,
    size as sizeTokens,
    spacing as spacingTokens,
} from './tokens';
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
    overrides: {},
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