'use strict'

let savedLink = '';

function saveLink() {
    const link = prompt("Введіть посилання (URL):");
    if (link) {
        if (!/^https?:\/\//i.test(link)) {
            savedLink = 'https://' + link;
        } else {
            savedLink = link;
        }
        alert("Посилання збережено!");
    }
}

function redirect() {
    if (savedLink) {
        window.location.href = savedLink;
    } else {
        alert("Спочатку введіть посилання!");
    }
}