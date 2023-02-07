import styles from "./Card.module.css";
import React from "react";

export default function Card(props) {
  return (
    <div className={styles.styleCard}>
      <div className={styles.styleCardContent}>
      <div className={styles.botonDiv}>
        <button className={styles.boton} onClick={props.onClose}>
          X
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

{
  /* <div className={styles.cardDiv}>
<div className={styles.botonDiv}>
<button className={styles.boton} onClick={props.onClose}>X</button>
</div>
<div className={styles.nameDiv}>
<p className={styles.name}>{props.name}</p>
</div>
<img src={props.image} alt='' />
<div className={styles.bottomDiv}>
<p className={styles.name}>{props.species}</p>
<p className={styles.name}>{props.gender}</p>
</div>
</div> */
}
