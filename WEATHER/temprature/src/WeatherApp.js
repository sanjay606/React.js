import React, { useState, useEffect } from 'react';

const API_KEY = 'ebe1cc74fe42299b75009a66cc17b193';

function WeatherApp() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch weather data for the user's current location on initial load
    fetchWeatherForCurrentLocation();
  }, []); // Empty dependency array ensures this effect runs once on initial load

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const fetchWeatherForCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        const { latitude, longitude } = position.coords;

        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
          );

          if (!response.ok) {
            throw new Error('City not found');
          }

          const data = await response.json();
          setWeatherData(data);
          setError('');
        } catch (err) {
          setError('City not found');
          setWeatherData(null);
        }
      }, (error) => {
        console.error('Error getting geolocation:', error);
        setError('Error getting geolocation. Please enter a city name.');
        setWeatherData(null);
      });
    } else {
      setError('Geolocation is not supported by your browser. Please enter a city name.');
      setWeatherData(null);
    }
  };

  const fetchWeatherData = () => {
    // Fetch weather data for the entered city
    if (city.trim() !== '') {
      fetchWeatherByCityName();
    } else {
      setError('Please enter a city name.');
    }
  };

  const fetchWeatherByCityName = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) {
        throw new Error('City not found');
      }

      const data = await response.json();
      setWeatherData(data);
      setError('');
    } catch (err) {
      setError('City not found');
      setWeatherData(null);
    }
  };

  return (
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <input
          type="text"
          placeholder="Enter city"
          value={city}
          onChange={handleInputChange}
        />
        <button onClick={fetchWeatherData}>Get Weather</button>
      </div>
      {error && <p>{error}</p>}
      {weatherData && (
        <div>
          <h2>{weatherData.name}, {weatherData.sys.country}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default WeatherApp;
