'use strict';

const assert = require('assert');
const fs = require('fs');
const poboxRegex = require('../');

describe('pobox-regex', function() {
  it('should match addresses that contain a PO box', function () {
    fs.readFileSync(`${__dirname}/positive-matches.txt`).toString().split('\n')
      .filter(function(line) {
        return Boolean(line);
      })
      .forEach(function(line) {
        assert.strictEqual(poboxRegex.test(line), true);
      });
  });

  it('should NOT match addresses that DO NOT contain a PO box', function () {
    fs.readFileSync(`${__dirname}/negative-matches.txt`).toString().split('\n')
      .filter(function(line) {
        return Boolean(line);
      })
      .forEach(function(line) {
        assert.strictEqual(poboxRegex.test(line), false);
      });
  });
});
