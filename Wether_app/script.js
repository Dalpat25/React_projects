document.addEventListener('DOMContentLoaded', function() {
    var getWeatherButton = document.getElementById('getWeatherButton');
    var cityInput = document.getElementById('cityInput');
    var weatherContainer = document.getElementById('weatherContainer');
    var locationElement = document.getElementById('location');
    var temperatureElement = document.getElementById('temperature');
    var descriptionElement = document.getElementById('description');

    getWeatherButton.addEventListener('click', function() {
        var city = cityInput.value;
        if (city.trim() !== '') {
            getWeather(city);
        }
    });

    function getWeather(city) {
        var apiKey = '7339ec53824ef6085c479f1ba1dc0460';
        var apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + ',in&appid=' + apiKey;

        fetch(apiUrl)
            .then(function(response) {
                return response.json();
            })
            .then(function(data) {
                displayWeather(data);
            })
            .catch(function() {
                alert('Error retrieving weather data.');
            });
    }

    function displayWeather(data) {
        var location = data.name + ', ' + data.sys.country;
        var temperature = (data.main.temp - 273.15).toFixed(2) + '°C';
        var description = data.weather[0].description;

        locationElement.textContent = location;
        temperatureElement.textContent = 'Temperature: ' + temperature;
        descriptionElement.textContent = 'Description: ' + description;

        weatherContainer.style.display = 'block';
    }
});
