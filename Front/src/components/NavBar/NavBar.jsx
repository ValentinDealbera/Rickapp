import React from "react";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar(props) {
  return (
    <div>
      <div className={styles.navBar}>
        <nav>
          <SearchBar onSearch={props.onSearch} logout={props.logout} />
        </nav>
      </div>
    </div>
  );
}
