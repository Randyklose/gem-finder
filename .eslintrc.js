module.exports = {
    parser: 'babel-eslint', // Specifies the ESLint custom parser
    parserOptions: {
        ecmaVersion: 2020, // Allows for the parsing of modern ECMAScript features
        sourceType: 'module', // Allows for the use of imports
        ecmaFeatures: {
            jsx: true, // Allows for the parsing of JSX
        },
    },
    settings: {
        react: {
            version: 'detect', // Tells eslint-plugin-react to automatically detect the version of React to use
        },
        'import/resolver': {
            alias: {
                map: [
                    ['@/*', './src/']
                ],
                extensions: ['.js', '.jsx', '.json'],
            },
        },
    },
    plugins: ['react-hooks', 'simple-import-sort'],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended', // Uses the recommended rules from @eslint-plugin-react
        'plugin:prettier/recommended', // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
    ],
    env: {
        browser: true,
        node: true,
    },
    rules: {
        // Place to specify ESLint rules. Can be used to overwrite rules specified from the extended configs
        'simple-import-sort/sort': 'warn',
        'react/prop-types': 'off', // TODO: turn on once components stabilize
        'react/jsx-props-no-spreading': 'off',
        'react/no-array-index-key': 'warn',
        'react-hooks/exhaustive-deps': 'error', // Checks effect dependencies
        'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
        'import/prefer-default-export': 'off',
        'import/no-extraneous-dependencies': [
            'warn',
            {
                devDependencies: true,
            },
        ],
    },
};