// main.js (ES6+)
const API_KEY = 'ab7faebb352a75cf1dbdeb939182eb04';
let currentCity = '';
const $ = id => document.getElementById(id);
const WEATHER_ICONS = {
  Clear: 'https://cdn-icons-png.flaticon.com/512/869/869869.png',
  Clouds: 'https://cdn-icons-png.flaticon.com/512/414/414825.png',
  Rain: 'https://cdn-icons-png.flaticon.com/512/3313/3313981.png',
  Drizzle: 'https://cdn-icons-png.flaticon.com/512/4150/4150897.png',
  Thunderstorm: 'https://cdn-icons-png.flaticon.com/512/1779/1779940.png',
  Snow: 'https://cdn-icons-png.flaticon.com/512/642/642102.png',
  Mist: 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png',
  Fog: 'https://cdn-icons-png.flaticon.com/512/4151/4151022.png',
  Smoke: 'https://cdn-icons-png.flaticon.com/512/727/727790.png',
  Haze: 'https://cdn-icons-png.flaticon.com/512/4005/4005901.png'
};
const getWeatherImage = main => WEATHER_ICONS[main] ?? WEATHER_ICONS.Clear;
const getWeather = async () => {
  const city = $('cityInput').value.trim();
  if (!city) {
    showError('Будь ласка, введіть назву міста.');
    return;
  }
  hideError();
  currentCity = city;
  await fetchWeather(city);
};
const refreshWeather = () => currentCity && fetchWeather(currentCity);
const fetchWeather = async city => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=ua`;
  try {
    const response = await fetch(url);
    const data = await response.json();
    if (response.ok === false) {
      throw new Error(data.message);
    }
    renderWeather(data);
  } catch {
    showError('Не вдалося знайти місто 😢');
    $('weatherData').style.display = 'none';
  }
};
const renderWeather = ({
  name,
  weather: [{
    main,
    description
  }],
  main: {
    temp,
    humidity
  },
  wind: {
    speed
  }
}) => {
  $('weatherData').style.display = 'block';
  $('cityName').textContent = name;
  $('description').textContent = description;
  $('temp').textContent = Math.round(temp);
  $('humidity').textContent = humidity;
  $('wind').textContent = speed;
  $('icon').src = getWeatherImage(main);
};
const showError = message => {
  $('error').textContent = message;
};
const hideError = () => {
  $('error').textContent = '';
};
window.getWeather = getWeather;
window.refreshWeather = refreshWeather;
