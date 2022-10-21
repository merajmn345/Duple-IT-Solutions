import React from "react";
import "./Weather.css";

function Weather({ weather }) {
  function onlydate() {
    var addslace = weather.localtime.split("-").join("/").slice(0, 10);
    console.log(addslace);
    return addslace;
  }

  function onlyTime() {
    var lineBreak = weather.localtime.split(" ").slice(1, 3);
    console.log(lineBreak);

    return lineBreak;
  }

  function dayNight() {
    if (weather.localtime.split(" ").slice(1, 3) > 12) {
      return "AM";
    } else {
      return "PM";
    }
  }
  return (
    <div id="weather_container">
      <div id="weather_info">
        <p className="day_date">{onlydate(weather.localtime)}</p>
        <p className="time">
          {onlyTime(weather.localtime)}

          {dayNight(weather.localtime)}
        </p>
        <p className="temp">{weather.temp}&deg;C</p>
        <div className="weather_description">
          <img
            style={{ background: "none" }}
            src={weather.weather_icons}
            alt="this is pic"
            height=""
            weight=""
          />
          <p>{weather.weather_descriptions}</p>
          <p>{weather.query}</p>
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
      )
    </div>
  );
}

export default Weather;
