var assert = require('chai').assert;
var check = require('../lib/luhn');

describe('check()', function() {
  it('should return a boolean', function() {
    let good = 8532;
    assert.typeOf(check(good), 'boolean');
  });
  it('should detect a valid number', function() {
    let good = 8532;
    assert.equal(check(good), true);
  });
  it('should detect an ivalid number', function() {
    let bad = 8432;
    assert.equal(check(bad), false);
  });
  it('should return \'false\' when testing a non number', function() {
    let badData = '8532x';
    assert.equal(check(badData), false);
  });
});


