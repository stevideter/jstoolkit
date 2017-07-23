// This file is not transpiled, use CommonJS and ES5

// Register babel to transpile
require('babel-register')();

// disable webpack features mocha doesn't understand
require.extensions['.css'] = function() {};
