# eslint-config-esayemm

```sh
yarn add --dev eslint-config-esayemm
```

## Usage

#### Regular JS environment

```js
module.exports = {
	"extends": ["esayemm"]
}
```

#### React environment

Also requires `yarn add eslint-plugin-react --dev`

```js
module.exports = {
	"extends": ["esayemm/configs/react"]
}
```

#### Optionally: Add a `.eslintignore` file

```js
// .eslintignore
// takes globs
build/
node_modules/
```
