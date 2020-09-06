import {
    color,
    border,
    font,
    opacity,
    size,
    spacing,
} from './tokens';
import {
    typography
} from './typography';

const spacingValues = Object.values(spacing.base.spacing).map(({
    value
}) => Number(value.split('px')[0]));

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
    props: {},
    spacing: [0, ...spacingValues],
    typography,
    tokens: {
        color: color.base.color,
        border: border.base.border,
        fontSize: font.size,
        fontWeight: font.weight,
        lineHeight: font['line-height'],
        radius: border.radius,
        size: size,
        spacing: spacing,
        opacity: opacity,
    },
};