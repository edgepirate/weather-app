import React, { useEffect, useCallback, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import useGeolocation from "./useGeolocation";

function App() {
  const lol = useGeolocation();
  const [weatherData, setWeatherData] = useState(null);
  // console.log(lol);
  const getWeatherData = useCallback((lat, lon, callback) => {
    fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${lon}`)
      .then(res => res.json())
      .then(callback);
  }, []);
  useEffect(() => {
    lol.coords &&
      getWeatherData(lol.coords.latitude, lol.coords.longitude, e =>
        setWeatherData(e)
      );
  }, [getWeatherData, lol]);
  return (
    <div className="App">
      {!weatherData ? (
        <p>{!lol ? "Loading" : "Please allow location access"} </p>
      ) : (
        <>
          <img src={weatherData.weather[0].icon} />
          <p>{weatherData.weather[0].description}</p>
        </>
      )}
    </div>
  );
}

export default App;
