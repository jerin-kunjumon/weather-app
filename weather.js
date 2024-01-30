const apiKey = '522943beb33a4dbf91985543243001';
const apiUrl = 'http://api.weatherapi.com/v1/';

const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('searchButton');
const locationElement = document.getElementById('location');
const temperatureElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}current.json?key=${apiKey}&q=${location}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.location.name;
            temperatureElement.textContent = `${Math.round(data.current.temp_c)}°C`;
            descriptionElement.textContent = data.current.condition.text;
        })
        .catch(error => {
            alert('Error fetching weather data. Make sure you entered a valid city name', error)
            console.error('Error fetching weather data:', error);
        });
}
