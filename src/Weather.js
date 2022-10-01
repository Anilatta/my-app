import React, { useState } from "react";
import axios from "axios";
import "./weather.css";
export default function Weather(props) {
  const [weatherdata, setWeatherdata] = useState({ ready: false });
  function handleResponse(response) {
    setWeatherdata({
      ready: true,
      temperature: response.data.main.temp,
      wind: response.data.wind.speed,
      city: response.data.name,
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      icon: response.data.weather[0].icon,
      date: "Saturday 18:00",
    });
  }
  if (weatherdata.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Enter a city"
                className="form-control"
                autoFocus="on"
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <h1>{weatherdata.city}</h1>
        <ul>
          <li>{weatherdata.date}</li>
          <li className="text-capitalize">{weatherdata.description}</li>
        </ul>
        <div className="row mt-3">
          <div className="col-6">
            <div className="clearfix">
              <img
                src={weatherdata.icon}
                alt={weatherdata.description}
                className="float-left"
              />
              <div className="float-left">
                <span className="temperature">
                  {Math.round(weatherdata.temperature)}
                </span>
                <span className="unit">° C</span>
              </div>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherdata.humidity}%</li>
              <li>Wind: {Math.round(weatherdata.wind)}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apiKey = "9583d26359a57772b18997e04cbea4af";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return "Loading...";
  }
}
