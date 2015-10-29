"use strict"

//Array Exercises

Array.prototype.uniq = function() {
  var result = [];
  for (var i = 0; i < this.length; i++) {
    var found = false;
    for (var j = 0; j < result.length; j++) {
      if (this[i] === result[j]) {
        found = true;
      }
    };
    if (found === false) {
      result.push(this[i]);
    }
  };
  return result;
};

Array.prototype.twoSum = function() {
  var result = [];

  for (var i = 0; i < this.length - 1; i++) {
    for (var j = i + 1; j < this.length; j++) {
      if (this[i] + this[j] === 0) {
        result.push([i, j]);
      }
    };
  };

  return result;
};


Array.prototype.transpose = function() {
  var result = [];
  var rowLength = this[0].length;
  var colLength = this.length;
  for (var i = 0; i < rowLength; i++) {
    var row = [];
    for (var j = 0; j < colLength; j++) {
      row.push(this[j][i]);
    };
    result.push(row);
  };

  return result;
};


//-Enumerable Exercises

Array.prototype.myEach = function(block) {

  for (var i = 0; i < this.length; i++) {
    block(this[i]);
  };

};
