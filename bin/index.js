#!/usr/bin/env node

const meow = require('meow');
const meowShortcuts = require('meow-shorts');

const app = require('..');

const cli = meow(`
	Usage:
	  $ cli-name …
`);

meowShortcuts(cli);

app(cli.input, cli.flags)
	.then(() => {
		console.log('Function exited correctly!');
	}).catch(console.error);
