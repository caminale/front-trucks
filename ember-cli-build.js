/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function() {
  const app = new EmberApp({
    'ember-cli-babel': {
      includePolyfill: true
    }
  });
  return app.toTree();
};
