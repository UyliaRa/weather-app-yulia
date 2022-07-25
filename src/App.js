import React from "react";
import "./App.css";
import Form from "./Form";

function App() {
  return (
    <div className="WeatherApp">
      <Form defaultCity="Kyiv" />
      <div>
        <h6 class="sign">
          This app was coded by Yulia Ratseburzhynska, and is{" "}
          <a href="https://github.com/UyliaRa/weather-app-yulia">
            open-sourced
          </a>
        </h6>
      </div>
    </div>
  );
}

export default App;
