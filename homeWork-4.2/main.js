'use strict'

const userNumber = prompt("Введіть тризначне число:");
const numStr = String(userNumber);

if (numStr.length !== 3) {
    alert("Введіть тризначне число");
}

const digit1 = numStr[0];
const digit2 = numStr[1];
const digit3 = numStr[2];

(digit1 === digit2) && (digit2 === digit3) ?
    console.log('Всі цифри однакові: true') :
    console.log('Всі цифри однакові: fulse');

(digit1 === digit2) || (digit1 === digit3) || (digit2 === digit3) ?
    console.log('Є однакові цифри: true') :
    console.log('Є однакові цифри: fulse');