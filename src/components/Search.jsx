import React from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import styles from "../styles/header.module.css";

const Search = () => {
  return (
    <div className={styles.search_div}>
      <i className={`bi bi-search ${styles.dark_icons}`}></i>
      <input
        type="text"
        name="text-search"
        placeholder="Search your location"
        className={styles.search_input}
      />
    </div>
  );
};

export default Search;
