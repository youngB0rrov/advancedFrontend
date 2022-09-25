module.exports = {
  env: {
    browser: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  parser: '@typescript-eslint/parser',
  plugins: [
    'react',
    'i18next',
  ],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'import/prefer-default-export': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.ts', '.tsx'] }],
    'no-unused-vars': 'warn',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'react/require-default-props': 'off',
    'import/no-extraneous-dependencies': 'warn',
    'react/function-component-definition': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'i18next/no-literal-string': [
      'error',
      { markupOnly: true, onlyAttribute: [''] },
    ],
    'max-len': ['error', {
      ignoreComments: true,
      code: 100,
    }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
