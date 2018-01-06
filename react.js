module.exports = {
  plugins: ['react'],
  extends: [
    'esayemm',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/no-did-mount-set-state': 0,
    'react/react-in-jsx-scope': 0,
  },
}
