'use strict'

const N = parseInt(prompt("Введіть ціле число N:"));

if (isNaN(N)) {
    console.log("Будь ласка, введіть дійсне ціле число.");
} else {
    console.log(`Числа від 1 до 100, квадрат яких не перевищує ${N}:`);

    for (let i = 1; i <= 100; i++) {

        const square = i * i;

        if (square <= N) {
            console.log(i);
        }
    }
}