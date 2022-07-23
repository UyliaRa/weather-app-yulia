import React, { useState } from "react";
import axios from "axios";

import "./Form.css";
import CurrentWeather from "./CurrentWeather";

export default function Form(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);
  function showWeather(response) {
    setWeatherData({
      ready: true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed,
      date: new Date(response.data.dt * 1000),
      city: response.data.name
    });
  }

  function search() {
    let apiKey = "c4e197dbfea53d6e2014f3499d598de9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Form">
        <form onSubmit={handleSubmit}>
          <div class="row">
            <div class="col-sm-9">
              <input
                type="search"
                placeholder="Type a city"
                class="form-control"
                autocomplete="off"
                onChange={handleCityChange}
              />
            </div>
            <div class="col-sm-3">
              <input
                type="submit"
                value="Search"
                class="form-control btn btn-primary"
              />
            </div>
          </div>
        </form>
        <CurrentWeather data={weatherData} />
      </div>
    );
  } else {
    search();
  }
}
