
const str = prompt('Введіть якийсь рядок');
const charsToRemove = prompt('Введіть символи що хочете видалити')

function removeChars(str, charsToRemove) {
    return str
        .split('')
        .filter(char => !charsToRemove.includes(char))
        .join('');
}

const result = removeChars(str, charsToRemove);
console.log(result);
