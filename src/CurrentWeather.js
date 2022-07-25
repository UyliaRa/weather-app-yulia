import React from "react";
import "./CurrentWeather.css";
import FormattedDate from "./FormattedDate";
import MainIcon from "./MainIcon";
import WeatherTemperature from "./WeatherTemperature";

export default function CurrentWeather(props) {
  return (
    <div className="CurrentWeather">
      <div class="row">
        <div class="col-5">
          <div class="currentCity">
            <h1>{props.data.city}</h1>
            <ul>
              <li>
                Last updated: <FormattedDate date={props.data.date} />
              </li>
              <li>
                <strong className="text-capitalize">
                  {props.data.description}
                </strong>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-2">
          <div className="imageTemp">
            <MainIcon code={props.data.icon} />
            <WeatherTemperature celsius={props.data.temperature} />
          </div>
        </div>
        <div class="col-sm-5 d-flex justify-content-sm-end">
          <div class="currentCondition">
            <ul>
              <li>
                <strong>Humidity: </strong>
                <span>{props.data.humidity}%</span>
              </li>
              <li>
                <strong>Wind: </strong>
                <span>{Math.round(props.data.wind)} m/s</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
