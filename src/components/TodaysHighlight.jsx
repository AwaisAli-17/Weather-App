import React from "react";
import getCurrentWeather from "../api/WeatherApi";
import styles from "../styles/todayshighlight.module.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { formatDate, days } from "../Utils";

const TodaysHighlight = () => {
  const data = getCurrentWeather().current;
  const {
    wind: { speed },
    humidity,
    uv_index,
    visibility,
  } = data;
  const todayHighlight = [
    { id: 0, name: "Wind", icon: "wind", unit: "km/h", value: speed },
    { id: 1, name: "Humidity", icon: "cloud-haze2", unit: "%", value: humidity },
    { id: 2, name: "UV Index", icon: "sunglasses", unit: "UV", value: uv_index },
    { id: 3, name: "Visibility", icon: "eye", unit: "km", value: visibility },
  ];
  const rise = "2025-01-19T07:55:28";
  const set = "2025-01-19T16:28:33";

  return (
    <div className={styles.todays_highlight_parent_div}>
      {/* <p style={{ fontSize: "28px" }}>Today's Highlight</p> */}
      <div>
        <p style={{ fontSize: "24px" }}>Today's Highlight</p>
        <div className={styles.section_one_div}>
          {todayHighlight.map((x) => (
            <div key={x.id} className={styles.todays_highlight_item_div}>
              <div className={styles.row_one}>
                <i className={`bi bi-${x.icon}`} />
                <p>{x.name}</p>
              </div>
              <p className={styles.value}>
                <span>{x.value}</span> {x.unit}
              </p>
            </div>
          ))}
        </div>
        <div className={styles.section_two_div}>
          <div>
            <img src="public/weather_icons/images/sunrise.png" width={70} height={70} />
            <p> Sunrise</p>
            <p>{rise.split("T")[1]}</p>
          </div>
          <div>
            <img src="public/weather_icons/images/sunset.png" width={70} height={70} />
            <p> Sunset</p>
            <p>{set.split("T")[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodaysHighlight;
