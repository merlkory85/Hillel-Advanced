"use strict"

const apiKey = 'ab7faebb352a75cf1dbdeb939182eb04';
let currentCity = '';

// URL-адреси з інтернету (іконки погоди)
function getWeatherImage(main) {
    const icons = {
        Clear: 'https://cdn-icons-png.flaticon.com/512/869/869869.png', // ☀️
        Clouds: 'https://cdn-icons-png.flaticon.com/512/414/414825.png', // ☁️
        Rain: 'https://cdn-icons-png.flaticon.com/512/3313/3313981.png', // 🌧️
        Drizzle: 'https://cdn-icons-png.flaticon.com/512/4150/4150897.png', // 🌦️
        Thunderstorm: 'https://cdn-icons-png.flaticon.com/512/1779/1779940.png', // ⛈️
        Snow: 'https://cdn-icons-png.flaticon.com/512/642/642102.png', // ❄️
        Mist: 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png', // 🌫️
        Fog: 'https://cdn-icons-png.flaticon.com/512/4151/4151022.png',
        Smoke: 'https://cdn-icons-png.flaticon.com/512/727/727790.png',
        Haze: 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png'
    };
    return icons[main] || 'https://cdn-icons-png.flaticon.com/512/869/869869.png';
}

async function getWeather() {
    const city = document.getElementById('cityInput').value.trim();
    if (!city) {
        document.getElementById('error').textContent = 'Будь ласка, введіть назву міста.';
        return;
    }
    document.getElementById('error').textContent = '';
    currentCity = city;
    await fetchWeatherData(city);
}

async function refreshWeather() {
    if (currentCity) await fetchWeatherData(currentCity);
}

async function fetchWeatherData(city) {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=ua`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod !== 200) throw new Error(data.message);

        const main = data.weather[0].main;
        const imageUrl = getWeatherImage(main);

        document.getElementById('weatherData').style.display = 'block';
        document.getElementById('cityName').textContent = data.name;
        document.getElementById('description').textContent = data.weather[0].description;
        document.getElementById('temp').textContent = Math.round(data.main.temp);
        document.getElementById('humidity').textContent = data.main.humidity;
        document.getElementById('wind').textContent = data.wind.speed;
        document.getElementById('icon').src = imageUrl;
    } catch (error) {
        document.getElementById('error').textContent = 'Не вдалося знайти місто 😢';
        document.getElementById('weatherData').style.display = 'none';
    }
}