import React from "react";
import "./weather.css";
export default function Weather() {
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
      <h1>Kyiv</h1>
      <ul>
        <li>Thursday 20:00</li>
        <li>Cloudy</li>
      </ul>
      <div className="row mt-3">
        <div className="col-6">
          <div className="clearfix">
            <img
              src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
              alt="Cloudy"
              className="float-left"
            />
            <div className="float-left">
              <span className="temperature">6</span>
              <span className="unit">° C</span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 3%</li>
            <li>Humidity: 74%</li>
            <li>Wind: 16km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
