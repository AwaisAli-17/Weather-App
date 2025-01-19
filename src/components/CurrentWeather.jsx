import React from "react";
import getCurrentWeather from "../api/WeatherApi";
import styles from "../styles/currentweather.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { formatDate, days } from "../Utils";
const CurrentWeather = () => {
  const data = getCurrentWeather().current;
  const date = new Date();
  const { temperature, feels_like, summary, icon_num, cloud_cover } = data;

  return (
    <div className={styles.current_weather_parent_div}>
      <div className={styles.location_div}>
        <button className={styles.location_button}>
          <i className={`bi bi-geo-alt`}></i>
          <p>London, United Kingdom</p>
        </button>

        <select>
          <option value="Celcius">C</option>
          <option value="Fahrenheit">F</option>
        </select>
      </div>
      <div className={styles.weather_div}>
        <div>
          <p style={{ fontSize: "36px" }}>{days[new Date().getDay()]}</p>
          <p style={{ fontSize: "16px" }}>{formatDate(date)}</p>
        </div>
        <div className={styles.weather_image_div}>
          <img src={`public/weather_icons/weather_icons/set04/big/${icon_num}.png`} />
          <p style={{ fontSize: "20px" }}>Cloud Cover: {cloud_cover}</p>
        </div>
        <div>
          <p style={{ fontSize: "40px", textAlign: "right" }}>{temperature} &deg;C</p>
          <p style={{ fontSize: "16px" }}>Feels Like: {feels_like} &deg;C</p>
          <br />
          <br />
          <br />
          <p style={{ fontSize: "20px", textAlign: "right" }}>{summary}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
