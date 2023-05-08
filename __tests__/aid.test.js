'use strict';

const aid = require('..');
const assert = require('assert').strict;

assert.strictEqual(aid(), 'Hello from aid');
console.info('aid tests passed');
