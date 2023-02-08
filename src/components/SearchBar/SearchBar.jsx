import React from "react";
import styles from './SearchBar.module.css'
import { useState } from "react";

export default function SearchBar(props) {

   const [character, setCharacter] = useState('')
   console.log(character);
   const input = (evento) => {
      setCharacter(evento.target.value)
   }
   
   return (
      <div className={styles.searchBar}>
       <input value={character} onChange={input} className={styles.input} type='search' />
      <button className={styles.button} onClick={()=>{props.onSearch(character)}}>Agregar</button>
      </div>
   );
}
