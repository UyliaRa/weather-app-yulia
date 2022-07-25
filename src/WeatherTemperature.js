import React from "react";
import "./WeatherTemperature.css";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <span className="curTemp">{Math.round(props.celsius)}</span>{" "}
      <span className="unit align-text-top">°C </span>
    </div>
  );
}
