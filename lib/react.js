module.exports = {
  "plugins": [
    "react",
  ],
  "extends": [
    "esayemm/lib/defaults",
    "esayemm/lib/ecmascript6",
    "plugin:react/recommended",
  ],
  "rules": {
    "react/no-did-mount-set-state": 0,
    "react/react-in-jsx-scope": 0,
  }
}
