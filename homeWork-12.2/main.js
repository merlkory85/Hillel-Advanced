'use strict'

const container = document.getElementById('wrapper');

container.addEventListener('click', function (event) {
    // Перевіряємо, чи клік був саме на кнопці
    if (event.target.tagName === 'BUTTON') {
        const name = event.target.dataset.name;
        alert(`Клікнуто на кнопці: ${name}`);
    }
});