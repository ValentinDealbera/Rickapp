import styles from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Card(props) {
  return (
    <div className={styles.styleCard}>
      <div className={styles.styleCardContentUp}>
        <div className={styles.botonDiv}>
          <button className={styles.boton} onClick={props.onClose}></button>
        </div>
        <Link to={`/detail/${props.id}`}>
          <p className={styles.styleCardTitle}>{props.name}</p>
        </Link>
      </div>
      <div className={styles.styleImage}>
        <Link to={`/detail/${props.id}`}>
          <img
            className={styles.styleImage}
            src={props.image}
            alt={props.name}
          />
        </Link>
      </div>
      <div className={styles.styleCardContent}>
        <p className={styles.styleLocationLabel}>{props.gender}</p>
        <p className={styles.styleDescription}>{props.species}</p>
      </div>
    </div>
  );
}
