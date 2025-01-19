import React from "react";
import CurrentWeather from "./CurrentWeather";
import TodaysHighlight from "./TodaysHighlight";
import styles from "../styles/main.module.css";

const Main = () => {
  return (
    <div className={styles.row1_parent_div}>
      <CurrentWeather />
      <TodaysHighlight />
    </div>
  );
};

export default Main;
