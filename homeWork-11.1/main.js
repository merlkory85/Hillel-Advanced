'use strict'

function createPifagorTable(size) {
    const container = document.getElementById('pifagor');
    for (let i = 1; i <= size; i++) {
        for (let j = 1; j <= size; j++) {
            const cell = document.createElement('div');
            cell.className = 'cell';
            cell.textContent = i * j;
            container.appendChild(cell);
        }
    }
}

// Виклик функції для створення таблиці 10x10
createPifagorTable(10);
