'use strict'

// масив зі змішаними типами данних
const mixedArray = [10, 'hello', true, 20, null, 30, '25', undefined, {}, 40, 5, '10', 'world', 35, 1000];

// Функція яка знайде всі числа і виведе середнє арифметичне
function averageOfNumbers(arr) {
    // Сума чисел що цикл знайде в масиві
    let sum = 0;
    // Лічильник кількості чисел що цикл знайде в масиві
    let count = 0;
    // Проходим циклом по масиву і шукаємо число, знайені числа сумуються та їх кількість записується в лічильниk
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
            sum += arr[i];
            count++;
        }
    }
    // Перевіряємо чи не пустий масив, якщо ні то ділимо суму чисел на кількість для знаходження середнього арифметичного
    return count > 0 ? sum / count : 0;
}

console.log(averageOfNumbers(mixedArray));