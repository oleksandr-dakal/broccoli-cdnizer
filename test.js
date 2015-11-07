'use strict';

var assert = require('assert');
var fs = require('fs');
var rimraf = require('rimraf');
var path = require('path');

var dummyDir = 'dummy-temp';

afterEach(function () {
  rimraf.sync(dummyDir);
});

it('Should find cdn link', function () {
  assert(/cdnlink/.test(
    fs.readFileSync(path.join(dummyDir, 'test.html'), 'utf8')
  ));
});
