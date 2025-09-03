'use strict'

let numOrStr = prompt('input number or string');

console.log(numOrStr)

switch (numOrStr) {
    case null: {
        console.log('Ви скасували)')
        break;
    }
    case '': {
        console.log('Empty String');
        break;
    }
    case !isNaN(numOrStr) || numOrStr: {
        console.log(' number is Ba_NaN')
        break;
    }
    default: {
        console.log('OK!')
    }
}