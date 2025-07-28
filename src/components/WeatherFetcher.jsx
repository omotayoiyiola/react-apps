import React, { useState } from 'react';

const WeatherFetcher = () => {
  const [city, setCity] = useState('Lagos');
  const [weather, setWeather] = useState(null);

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid={3e2ec575294360396b1b14b8f37aae66}`
  )
    .then((res) => res.json())
    .then((data) => setWeather(data));

  return (
    <div>
      <input value={city} onChange={(e) => setCity(e.target.value)} />
      {weather && (
        <h2>
          {weather.name}: {weather.weather[0].description}
        </h2>
      )}
    </div>
  );
};

export default WeatherFetcher;
