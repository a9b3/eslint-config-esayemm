module.exports = {
  "plugins": [
    "react",
  ],
  "extends": [
    "esayemm/configs/defaults",
    "esayemm/configs/ecmascript6",
    "plugin:react/recommended",
  ],
  "rules": {
    "react/no-did-mount-set-state": 0,
    "react/react-in-jsx-scope": 0,
  }
}
