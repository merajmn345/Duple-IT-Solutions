import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import Weather from "./Weather";

function App() {
  const [loading, setLoading] = useState(false);
  const [weather, setWeather] = useState({
    localtime: "",
    wind_dir: "",
    temp: 0,
    temp_max: 0,
    temp_min: 0,
    weather_icons: "",
    weather_descriptions: "",
  });

  useEffect(() => {
    const load = async () => {
      setLoading(true);

      const response = await axios.get(
        "http://api.weatherstack.com/current?access_key=f47104ca8a7d67b308fa0a2d2a017124&query=Bhopal"
      );
      setWeather({
        localtime: response.data.location.localtime,
        wind_dir: response.data.current.wind_dir,
        temp: response.data.current.temperature,
        temp_max: 0,
        temp_min: 0,
        weather_icons: response.data.current.weather_icons[0],
        weather_descriptions: response.data.current.weather_descriptions,
        query: response.data.request.query,
      });
      console.log(weather.localtime);
      console.log(weather.weather_icons);

      setLoading(false);
    };
    load();
  }, []);

  return (
    <div className="App">
      <Weather weather={weather} />
    </div>
  );
}

export default App;
