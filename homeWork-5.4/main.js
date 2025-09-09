'use strict'

let num = parseInt(prompt("Введіть ціле число:"));
let isPrime = true;

if (num <= 1) {
  isPrime = false;
} else {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }
}

if (isPrime) {
  alert(`${num} — просте число.`);
} else {
  alert(`${num} — не є простим числом.`);
}