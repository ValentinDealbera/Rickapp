import React from "react";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";

export default function NavBar() {
  return (
    <div className={styles.navBar}>
    <nav>
      <SearchBar onSearch={(characterID) => window.alert(characterID)} />
    </nav>
    </div>
  );
}
