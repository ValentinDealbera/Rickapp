import React from "react";
import styles from "./SearchBar.module.css";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function SearchBar(props) {
  const [character, setCharacter] = useState("");
  console.log(character);
  const input = (evento) => {
    setCharacter(evento.target.value);
  };

  const handleKeyPress = (event) => {
   if(event.key === 'Enter'){
     props.onSearch(character)
     setCharacter('')
   }
 }

  return (
    <div className={styles.divGeneral}>
      <div className={styles.buttonDiv}>
        <Link to={"/about"}>
          <span className={styles.button}>About</span>
        </Link>
        <Link to={"/home"}>
          <span className={styles.button}>Home</span>
        </Link>
      </div>
      <div className={styles.searchBar}>
        <input
          placeholder="Search character ID"
          value={character}
          onChange={input}
          className={styles.input}
          type="search"
          onKeyDown={handleKeyPress}
        />
        <button
          className={styles.button}
          onClick={() => {
            props.onSearch(character);
            setCharacter("");
          }}
        >
          Agregar
        </button>
      </div>
    </div>
  );
}
