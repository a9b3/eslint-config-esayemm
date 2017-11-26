# eslint-config-esayemm

Install

```sh
yarn add --dev eslint-config-esayemm
```

## Configure

Configure

```js
// .eslintrc.js
module.exports = {
	"extends": [
		// ...
		"esayemm",
	],
	// ...
}
```

Optionally: Add a `.eslintignore` file.

```js
// .eslintignore
// takes globs
build/
node_modules/
```

## React

Extend `esayemm/react`. Requires the [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react).

```sh
# for using eslint global cli or install locally
npm i eslint-plugin-react --save-dev
```

## Dev

Rules

- 0 - never notify
- 1 - warn
- 2 - error