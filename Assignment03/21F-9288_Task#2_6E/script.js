function fetchWeather() {
    var apiKey = '7043310676808a99e16e344e5d06a193';
    const city = document.getElementById('city-input').value.trim(); // Trim leading and trailing spaces
    var apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    // Check if city input is empty
    if (!city) {
        alert("Please enter a city name.");
        return; // Stop further execution of the function
    }

    const xhr = new XMLHttpRequest();
    xhr.open('GET', apiUrl);
    xhr.onload = function() {
        if (xhr.status === 200) {
            const weatherData = JSON.parse(xhr.responseText);
            console.log(weatherData);

            document.getElementById('weather-info').innerHTML = `
                <h2>Weather in ${weatherData.name}</h2>
                <p><i class="fas fa-thermometer-half"></i> Temperature: ${weatherData.main.temp}°C</p>
                <p><i class="fas fa-tachometer-alt"></i> Pressure: ${weatherData.main.pressure} m/s</p>
                <p><i class="fas fa-tint"></i> Humidity: ${weatherData.main.humidity}%</p>
            `;
        } else {
            alert("City not found. Please enter a valid city name.");
            console.error('Error fetching weather data:', xhr.statusText);
        }
    };
    xhr.onerror = function() {
        alert("An error occurred while fetching weather data. Please try again later.");
        console.error('Error fetching weather data:', xhr.statusText);
    };
    xhr.send();
}
