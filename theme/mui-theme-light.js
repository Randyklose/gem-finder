import {
    createMuiTheme,
    responsiveFontSizes
} from '@material-ui/core/styles';
import merge from 'deepmerge';

import {
    baseTheme
} from './mui-theme-base';

const {
    tokens: {
        color
    },
} = baseTheme;


const lightTheme = merge(baseTheme, {
    themeName: 'Bigstock Light',
    palette: {
        type: 'light',
        primary: {
            main: color.black.value,
        },
        secondary: {
            main: color.black.value,
        },
        info: {
            main: color.blue.azure.value,
        },
        success: {
            main: color.green.jungle.value,
        },
        warning: {
            main: color.yellow.amber.value,
        },
        background: {
            default: color.white.value,
        },
        border1Color: color.gray['onyx-12'].value,
    },
    overrides: {
        MuiButton: {
            containedPrimary: {
                color: color.white.value,
                '&:hover': {
                    backgroundColor: color.gray['onyx-87'].value,
                },
            },
        },
    },
});

// For optimal SSR performance we compute the initial theme at build time
export const muiThemeLight = responsiveFontSizes(createMuiTheme(lightTheme));