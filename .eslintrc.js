module.exports = {
    "env": {
        "es2021": true
    },
    "extends": [
        "plugin:react/recommended",
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "@typescript-eslint",
        "prettier",
        "jsx-a11y"
    ],
    "rules": {
        'prettier/prettier': 'error',
        'react/jsx-filename-extension': [
        'warn',
        {
            extensions: ['.jsx', '.js', '.ts', '.tsx']
        }
        ],
        'import/prefer-default-export': 'off',
        "jsx-a11y/alt-text": "error",
        "jsx-a11y/anchor-has-content": "error",
        'react/state-in-constructor': 'off',
        'react/static-property-placement': 'off',
        'react/jsx-props-no-spreading': 'off',
        'react/prop-types': 'off',
        'no-param-reassign': 'off',
        'no-console': 'off'
    },
}