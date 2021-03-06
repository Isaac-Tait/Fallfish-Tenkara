module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier',
    'prettier/react'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    'prettier',
  ],
  rules: {
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": true
},
"prettier/prettier": [
  "error",
  {
    "trailingComma": "es5",
    "singleQuote": true,
    "printWidth": 120,
  }
],
};

//Testing