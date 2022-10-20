import React from "react";
import "./Weather.css";

function Weather({ Weather }) {
  return (
    <div id="weather_container">
      {Weather.map((entry) => {
        return (
          <div id="weather_info">
            <p className="day_date">{entry.localtime}</p>
            <p className="time">12:30 AM</p>
            <p className="temp">28 deg</p>
            <div className="weather_description">
              <img
                src={entry.weather_icons}
                alt="this is pic"
                height=""
                weight=""
              />
              <p>Haze</p>
            </div>

            <div id="max_min_temp">
              <p className="max_temp">Max Temp</p>
              <p className="min_temp">Min Temp</p>
            </div>

            <div id="humidity_details">
              <p className="humidity_data">Wind:</p>
              <p className="humidity_data">6 mi/h</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Weather;
