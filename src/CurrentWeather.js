import React from "react";
import "./CurrentWeather.css";
import CurrentTemperature from "./CurrentTemperature";

import MainIcon from "./MainIcon";

export default function CurrentWeather() {
  return (
    <div className="CurrentWeather">
      <div class="row">
        <div class="col-5">
          <div class="currentCity">
            <h1>
              <span id="searchedCity">Kyiv</span>
            </h1>
            <ul>
              <li>Last updated: Tuesday 10:00</li>
              <li>
                <strong>Sunny</strong>
              </li>
            </ul>
          </div>
        </div>
        <div class="col-2">
          <div class="imageTemp">
            <MainIcon />
            <div>
              <span class="curTemp"><h1><CurrentTemperature/></h1></span>
            </div>
          </div>
        </div>
        <div class="col-5">
          <div class="currentCondition">
            <ul>
              <li>
                <strong>Humidity: </strong>
                <span id="humidity"></span>50%
              </li>
              <li>
                <strong>Wind: </strong>
                <span id="wind"></span>5 m/s
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
  );

}
