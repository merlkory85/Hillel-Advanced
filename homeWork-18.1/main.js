'use strict'

// Початковий час у секундах (наприклад, 1 хв 25 сек = 85 секунд)
let timeLeft = 88;

const timerDisplay = document.getElementById('timer');

function updateTimer() {
    // Обчислюємо хвилини та секунди
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Виводимо у форматі 01:25
    timerDisplay.textContent =
        `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    // Зменшуємо час, якщо ще не закінчився
    if (timeLeft > 0) {
        timeLeft--;
    } else {
        clearInterval(timerInterval); // Зупиняємо таймер
    }
}

// Оновлюємо одразу при запуску
updateTimer();

// Оновлення кожну секунду
const timerInterval = setInterval(updateTimer, 1000);