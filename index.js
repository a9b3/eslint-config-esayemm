module.exports = {
  plugins: ['esayemm'],
  extends: [
    'esayemm/configs/defaults',
    'esayemm/configs/ecmascript6',
    'plugin:prettier/recommended',
  ],
  rules: {
    'esayemm/align-imports': 2,
    'esayemm/sort-imports': 2,
  },
}
