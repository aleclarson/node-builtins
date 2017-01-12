'use strict';

const test = require('tape');
const nodeBuiltins = require('../');

test('node-builtins tests', (t) => {
  t.equal(Array.isArray(nodeBuiltins), true, 'should be an array');
  t.end();
});
