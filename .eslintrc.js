module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "no-use-before-define": 'off',
    "no-undef": 'off',
    'no-useless-escape':'off'
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
