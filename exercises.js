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

Array.prototype.myMap = function(block) {

  var result = [];
  this.myEach(function(elem) {
    result.push(block(elem));
  });
  return result;

}

Array.prototype.myInject = function(val, block) {

  var accumulator = val
  this.myEach(function(elem) {
    accumulator = block(accumulator, elem)
  });
  return accumulator;
}

//-Iteration exercises

Array.prototype.bubbleSort = function() {

  var swapped = false;
  do {
    swapped = false;
    for (var i = 0; i < this.length - 1; i++) {
      if (this[i] > this[i + 1]) {
        var temp = this[i];
        this[i] = this[i + 1];
        this[i + 1] = temp;

        swapped = true;
      }
    };

  } while (swapped);
  return this;
}

String.prototype.substrings = function() {
  var result = []
  for (var i = 0; i < this.length; i++) {
    for (var j = i; j < this.length; j++) {
      result.push(this.substring(i, j+1))
    };
  };
  return result;

};

// Recursion

var exponent1 = function(base, exp) {
  if (exp == 0){
    return 1;
  }
  return base * exponent(base, exp - 1);
}


var exponent2 = function(base, exp) {
  if (exp == 0){
    return 1;
  }
  else if (base % 2 === 0) {
    var result = exponent(base, exp / 2);
    return result * result;
  }
  else {
    var result = exponent(base, (exp - 1) / 2);
    return base * result * result;
  }
};


var fib = function(num) {
  if (num === 1) {
    return [0];
  }
  else if (num === 2) {
    return [0, 1];
  }

  var fibs = fib(num - 1);
  fibs.push(fibs[fibs.length-2] + fibs[fibs.length-1]);
  return fibs;
};

var bsearch = function(array, target) {
  var offset = 0;
  var middle = Math.floor(array.length/2);

  if (array[middle] === target) {
    return middle;
  } else if (middle === 0) {
    return NaN;
  } else if (target > array[middle]) {
    return middle + bsearch(array.slice(middle, array.length), target);
  } else {
    return offset + bsearch(array.slice(0, middle), target);
  }
};

var makeChange = function(target, options) {
  if (target === options[0]) {
    return [options[0]];
  }

  if (target > options[0]) {
    var leftover = target - options[0];
    var wallet = [options[0]];
    return wallet.concat(makeChange(leftover, options));
  } else {
    var new_options = options.slice(1, options.length)
    return makeChange(target, new_options)
  }

}

var makeBestChange = function(target, options) {
  var bestWallet = [], lowestCoins = null, wallet = [], coins = 0;
  for (var i = 0; i < options.length; i++) {
    wallet = makeChange(target, options.slice(i, options.length));
    coins = wallet.length;
    if (lowestCoins === null || lowestCoins > coins) {
      lowestCoins = coins;
      bestWallet = wallet;
    }
  };

  return bestWallet;
}


var merge = function(firstHalf, secondHalf) {
  var mergedArr = [];
  while (firstHalf.length > 0 && secondHalf.length > 0) {
    if (firstHalf[0] === secondHalf[0]) {
      mergedArr.push(firstHalf[0]);
      firstHalf.shift();
    } else if (firstHalf[0] < secondHalf[0]) {
      mergedArr.push(firstHalf[0]);
      firstHalf.shift();
    } else {
      mergedArr.push(secondHalf[0]);
      secondHalf.shift();
    }
  };

  mergedArr = mergedArr.concat(firstHalf).concat(secondHalf);
  return mergedArr;
};


var mergeSort = function(arr) {
  if (arr.length <= 1) {
    return arr;
  }

  var middle = Math.floor(arr.length/2);
  var firstHalf = mergeSort(arr.slice(0, middle));
  var secondHalf = mergeSort(arr.slice(middle, arr.length));
  debugger
  var mergedArr = merge(firstHalf, secondHalf)
  return mergedArr;
};
