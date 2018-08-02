'use strict';

module.exports = require('repl')._builtinLibs.concat([
  'console',
  'constants',
  'module',
  'timers'
]);
