'use strict'
const sum = createSum();

function createSum() {
    let total = 0;

    return function (num) {
        total += num;
        return total;
    };
}

console.log(sum(2));
console.log(sum(2));
console.log(sum(12));
console.log(sum(22));