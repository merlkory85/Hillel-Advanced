'use strict'

function productOfTwoNumbers(a) {
  return function(b) {
    return a * b;
  };
}

console.log(productOfTwoNumbers(15)(2));