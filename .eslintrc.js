module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
  },
  'extends': [
    'plugin:react/recommended',
    'google',
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true,
    },
    'ecmaVersion': 13,
    'sourceType': 'module',
  },
  'plugins': [
    'react',
    'import',
    'react-native',
    'react-hooks',
  ],
  'settings': {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _screens: './src/screens',
          _navigations: './src/navigations',
          _store: './src/store',
          _apis: './src/apis',
          _styles: './src/styles',
          _utils: './src/utils',
        },
      },
    },
  },
  'rules': {
    'indent': ['error', 2],
    'react-native/no-unused-styles': 2,
    'react-native/split-platform-components': 2,
    'react-native/no-inline-styles': 2,
    'react-native/no-color-literals': 'off',
    'react-native/no-raw-text': 2,
    'react-native/no-single-element-style-arrays': 2,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/prop-types': 'off',
    'no-console': 'warn',
    'react/jsx-filename-extension': 'off',
    'no-use-before-define': 'off',
    'max-len': [2, {code: 80}],
    'react/style-prop-object': 'off',
    'no-trailing-spaces': 'error',
    'eol-last': 2,
    'sort-imports': ['warn', {
      ignoreCase: false,
      ignoreDeclarationSort: true,
      ignoreMemberSort: false,
      memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      allowSeparatedGroups: false,
    }],
    'semi': 'error',
    'import/newline-after-import': 'error',
    'func-names': 'off',
    'require-jsdoc': 'off',
  },
};
