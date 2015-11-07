'use strict';

var Filter = require('broccoli-filter');
var cdnizer = require('cdnizer');

function CdnizerFilter(inputTree, options) {
  if (!(this instanceof CdnizerFilter)) {
    return new CdnizerFilter(inputTree, options);
  }

  Filter.call(this, inputTree);

  this.inputTree = inputTree;
  this.cdnizerHandler = cdnizer(options);
}

CdnizerFilter.prototype = Object.create(Filter.prototype);
CdnizerFilter.prototype.constructor = CdnizerFilter;

CdnizerFilter.prototype.processString = function (str) {
  return this.cdnizerHandler(str);
};

module.exports = CdnizerFilter;
