'use strict';
var path = require('path');
var assert = require('yeoman-assert');
var helpers = require('yeoman-test');

describe('generator-mos:app', function () {
  before(function () {
    return helpers.run(path.join(__dirname, '../generators/ES6'))
      .withPrompts({
        name: 'Test Module',
        description: 'This module creates magical things',
        author: 'Batman'
      })
      .toPromise();
  });

  it('creates files', function () {
    assert.file([
      'package.json'
    ]);
  });
});
