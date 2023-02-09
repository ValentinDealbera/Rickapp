import React from "react";
import styles from "./NavBar.module.css";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
export default function NavBar(props) {
  return (
    <div>
      <div>
      <Link to={'/about'}>
      <button>About</button>
      </Link>
      <Link to={'/home'}>
      <button>Home</button>
      </Link>
      </div>
      <div className={styles.navBar}>
      <nav>
        <SearchBar onSearch={props.onSearch} />
      </nav>
      </div>
    </div>
  );
}
