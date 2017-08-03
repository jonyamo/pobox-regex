'use strict';

const assert = require('assert');
const poboxRegex = require('./index');

const fixtures = {
  // should match
  positive: [
    'PO Box 123',
    'P O box 123',
    'P. O. Box 123',
    'P.O.Box 123',
    'post box 123',
    'post office box 123',
    'post office 123',
    'P.O.B 123',
    'P.O.B. 123',
    'Post Office Bin 123',
    'Postal Code 123',
    'Post Box #123',
    'Postal Box 123',
    'P.O. Box 123',
    'PO. Box 123',
    'P.o box 123',
    'Pobox 123',
    'pob 123',
    'pob123',
    'pobox123',
    'p.o. Box123',
    'po-box123',
    'p.o.-box 123',
    'PO-Box 123',
    'p-o-box 123',
    'p-o box 123',
    'box 123',
    'Box123',
    'Box-123'
  ],
  // should not match
  negative: [
    '123 Box Turtle Circle, Sarasota, FL',
    '123 Boxing Pass, San Antonio, TX',
    '123 Poblano Lane, Edinburg, TX',
    '123 P O Davis Drive, Auburn, AL',
    '123 Postal Circle, Manitowish Waters, WI'
  ]
};

describe('pobox-regex', function() {
  it('should match addresses that contain a PO box', function () {
    fixtures.positive.forEach(function(address) {
      assert.strictEqual(poboxRegex().test(address), true);
    });
  });

  it('should NOT match addresses that DO NOT contain a PO box', function () {
    fixtures.negative.forEach(function(address) {
      assert.strictEqual(poboxRegex().test(address), false);
    });
  });
});
