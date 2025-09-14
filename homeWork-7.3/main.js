'use strict'

let array = [1, 3, 4, 6, 2, 5, 7];

function removeElement(array, item) {
    const index = array.indexOf(item);

    if (index !== -1) {
        array.splice(index, 1);
    }
}

removeElement(array, 1);
console.log(array);