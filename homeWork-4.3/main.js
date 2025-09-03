'use strict'

let age = prompt('Ваш рік народження ?');
let city = prompt('В якому місті Ви живете ?')
let sport = prompt('Ваш улюблений вид спорту: F1, Футбол, Хокей ?')

let cityArr = ['Київ', 'Вашингтон', 'Лондон'];
let sportArr = ['F1', 'Футбол', 'Хокей'];

if (age === null || age === '') {
    alert('Шкода, що Ви не захотіли ввести свій(ю) дату народження.');
} else {
    alert(`Ви народилися в ${age} році`);
}

if (city === null || city === '') {
    alert('Шкода, що Ви не захотіли ввести назву свого міста.');
} 

if (sport === null || sport === '') {
    alert('Шкода, що Ви не захотіли ввести назву свого улюленого виду спорту.');
} 

if (city === cityArr[0]) {
    alert('Ви живете у столиці України');
} else if (city === cityArr[1]) {
    alert('Ви живете у столиці США');
} else if (city === cityArr[2]) {
    alert('Ви живете у столиці Великої Британії');
} else {
    alert(`Ви живете у місті ${city}.`);
}

if (sport === sportArr[0]) {
    alert('Круто! Хочеш стати Міхаелем Шумахером ?');
} else if (sport === sportArr[1]) {
    alert('Круто! Хочеш стати Ліонелем Мессі?');
} else if (sport === sportArr[2]) {
    alert('Круто! Хочеш стати Андресем Амбюлем ?');
} else {
    alert(`Ви живете у місті ${city}.`);
}