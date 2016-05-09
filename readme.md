#eslint-config-esayemm

Install

```
npm i --save-dev eslint-config-esayemm
```

Configure

```
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

#### React

Extend `esayemm/lib/react`. Requires the [eslint-plugin-react](https://github.com/yannickcr/eslint-plugin-react).

```
# for using eslint global cli or install locally
npm i -g eslint-plugin-react
```