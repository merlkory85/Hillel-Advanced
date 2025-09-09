const arr = [1, 2, 3, 5, 6, 8, 12, 33, 21, 55, 66, 80, 44];

const evenNumbers = [];

console.log(arr);

for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenNumbers.push(arr[i]);
    }
}

console.log(evenNumbers);

