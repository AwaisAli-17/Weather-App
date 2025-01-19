import Search from "./Search";
import ThemeSwitch from "./ThemeSwitch";
import Title from "./Title";
import styles from "../styles/header.module.css";

const Header = () => {
  return (
    <div className={styles.main_div}>
      <Title />
      <div className={styles.main_div}>
        <Search />
        <ThemeSwitch />
      </div>
    </div>
  );
};

export default Header;
