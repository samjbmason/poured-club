// This sets up babel so it can compile the server code (mostly for React SSR)
require('babel-register')({});

// This runs everything through css-modules because OMG it's hard getting CSS on SSR rendered React pages
require('css-modules-require-hook')({
  generateScopedName: '[name]_[local]_[hash:base64:5]'
});

// This sets up dot env before the server attempts to start so i can set my secret test keys
require('dotenv').config();

// This pulls in the server file
require('./server');
