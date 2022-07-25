import React from "react";
import "./ForecastIcon.css";
import sun from "./images/sun.png";
import cloudy from "./images/cloudy.png";
import cloud from "./images/cloud.png";
import rainy from "./images/rainy_day.png";
import rain from "./images/rain.png";
import lightening from "./images/lightening.png";
import snow from "./images/snowfall.png";
import wind from "./images/wind.png";
import weather from "./images/season.png";

export default function ForecastIcon(props) {
  if (props.code === "01d") {
    return <img className="forecasticon" src={sun} alt="sunny" />;
  } else if (props.code === "01n") {
    return <img className="forecasticon" src={sun} alt="sunny" />;
  } else if (props.code === "02d") {
    return <img className="forecasticon" src={cloudy} alt="Few Clouds" />;
  } else if (props.code === "02n") {
    return <img className="forecasticon" src={cloudy} alt="Few Clouds" />;
  } else if (props.code === "03d") {
    return <img className="forecasticon" src={cloud} alt="Clouds" />;
  } else if (props.code === "03n") {
    return <img className="forecasticon" src={cloud} alt="Clouds" />;
  } else if (props.code === "04d") {
    return <img className="forecasticon" src={cloud} alt="Clouds" />;
  } else if (props.code === "04n") {
    return <img className="forecasticon" src={cloud} alt="Clouds" />;
  } else if (props.code === "09d") {
    return <img className="forecasticon" src={rainy} alt="Shower Rain" />;
  } else if (props.code === "09n") {
    return <img className="forecasticon" src={rainy} alt="Shower Rain" />;
  } else if (props.code === "10d") {
    return <img className="forecasticon" src={rain} alt="Rain" />;
  } else if (props.code === "10n") {
    return <img className="forecasticon" src={rain} alt="Rain" />;
  } else if (props.code === "11d") {
    return <img className="forecasticon" src={lightening} alt="Thunderstorm" />;
  } else if (props.code === "11n") {
    return <img className="forecasticon" src={lightening} alt="Thunderstorm" />;
  } else if (props.code === "13d") {
    return <img className="forecasticon" src={snow} alt="Snow" />;
  } else if (props.code === "13n") {
    return <img className="forecasticon" src={snow} alt="Snow" />;
  } else if (props.code === "50d") {
    return <img className="forecasticon" src={wind} alt="Mist" />;
  } else if (props.code === "50n") {
    return <img className="forecasticon" src={wind} alt="Mist" />;
  } else {
    return <img className="forecasticon" src={weather} alt="Weather" />;
  }
}
