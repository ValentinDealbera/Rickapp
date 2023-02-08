import styles from "./Card.module.css";
import React from "react";

export default function Card(props) {
  return (
    <div className={styles.styleCard}>
      <div className={styles.styleCardContentUp}>
      <div className={styles.botonDiv}>
        <button className={styles.boton} onClick={props.onClose}>
        </button>
      </div>
        <p className={styles.styleCardTitle}>{props.name}</p>
      </div>
      <div className={styles.styleImage}>
        <img className={styles.styleImage} src={props.image} alt={props.name} />
      </div>
      <div className={styles.styleCardContent}>
        <p className={styles.styleLocationLabel}>{props.gender}</p>
        <p className={styles.styleDescription}>{props.species}</p>
      </div>
    </div>
  );
}