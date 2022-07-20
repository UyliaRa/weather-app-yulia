import React from "react";

import "./Form.css";
import CurrentWeather from "./CurrentWeather";

export default function Form() {
  return (
    <div className="Form">
      <form id="searchingForm">
        <div class="row">
          <div class="col-6">
            <input
              type="search"
              placeholder="Type a city"
              class="form-control"
              autocomplete="off"
              id="inputCity"
            />
          </div>
          <div class="col-3">
            <input
              type="submit"
              value="Search"
              class="form-control btn btn-primary"
            />
          </div>
          <div class="col-3">
            <button class="btn btn-success w-100" id="current-location-button">
              Current
            </button>
          </div>
        </div>
      </form>
      <CurrentWeather />
      <div><h6>This app was coded by Yulia Ratseburzhynska, and is <a href="https://github.com/UyliaRa/weather-app-yulia">open-sourced</a></h6></div>
    </div>
  );
}
