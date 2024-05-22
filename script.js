document.addEventListener('DOMContentLoaded', () => {
    const apiKey = '0480ad47534767f75970ddfd6152981f'; // Replace with your API key
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London&units=metric&appid=${apiKey}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            const weatherDiv = document.getElementById('weather');
            const temperature = data.main.temp;
            const description = data.weather[0].description;
            weatherDiv.innerHTML = `
                <p>Temperature: ${temperature}°C</p>
                <p>Condition: ${description}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
});
