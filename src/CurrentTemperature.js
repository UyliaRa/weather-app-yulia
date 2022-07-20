import React, { useState } from "react";
import axios from 'axios';

export default function CurrentTemperature(response){
    let [temperature, setTemperature] = useState(null);

    function showTemperature(response) {
      setTemperature(response.data.main.temp);
    }
  
    let apiKey = "c4e197dbfea53d6e2014f3499d598de9";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Kyiv&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showTemperature);
    return (
      <div>
        {" "}
       {Math.round(temperature)}°C{" "}
      </div>
    );
}