module.exports = {
  root: true,
  extends: ['react-app', 'plugin:import/recommended', 'plugin:import/typescript'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    'no-console': 'warn',
  },
};
