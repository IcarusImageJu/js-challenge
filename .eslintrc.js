module.exports = {
	env: {
		es6: true,
		browser: true,
		node: true,
		jest: true
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: [
		'react',
	],
	parser: "babel-eslint",
	rules: {
		"indent": [2, "tab", { "SwitchCase": 1, "VariableDeclarator": 1 }],
		"max-len": [1, 160],
		"no-tabs": 0,
		"react/prop-types": 0,
		"react/jsx-indent": [2, "tab"],
		"react/jsx-indent-props": [2, "tab"],
		"strict": 0
	},
};
