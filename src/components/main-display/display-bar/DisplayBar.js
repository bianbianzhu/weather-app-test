import React from "react";
import "./DisplayBar.scss";
import {
  WiCloudy,
  WiDaySunny,
  WiSnow,
  WiRain,
  WiDayHaze,
} from "react-icons/wi";

const DisplayBar = (props) => {
  const date = new Date();
  const year = date.toLocaleDateString("en-AU", { year: "2-digit" });
  const month = date.toLocaleDateString("en-AU", { month: "short" });

  const day = date.toLocaleDateString("en-Au", { day: "numeric" });
  const weekday = date.toLocaleDateString("en-AU", { weekday: "long" });

  const time = date.toLocaleTimeString("en-AU", { hour12: false });

  const weather = { ...props.weather };

  const location = weather.name;

  const country = weather.sys.country;

  const temperature = weather.main.temp;

  const weatherDetail = weather.weather[0].description;

  return (
    <div className="display-bar">
      <div className="display-bar__temperature">
        <h3>{Math.round(temperature)}°</h3>
      </div>
      <div className="display-bar__detail">
        <h3>
          {location}, <span>{country}</span>
        </h3>
        <h4 className="display-bar__date">
          {`${time} - ${weekday}, ${day} ${month} '${year}`}
        </h4>
      </div>
      <div className="display-bar__weather">
        {weatherDetail.includes("cloud") && <WiCloudy />}
        {weatherDetail.includes("sky") && <WiDaySunny />}
        {weatherDetail.includes("snow") && <WiSnow />}
        {weatherDetail.includes("rain") && <WiRain />}
        {weatherDetail.includes("haze") && <WiDayHaze />}
        <h3>{weatherDetail}</h3>
      </div>
    </div>
  );
};

export default DisplayBar;
