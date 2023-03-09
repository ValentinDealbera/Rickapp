import styles from "./Card.module.css";
import React from "react";
import { Link } from "react-router-dom";
import {addFavorites, deleteFavorites} from '../../redux/actions' 
import { connect } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";

function Card(props) {
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    console.log(props.myFavorites);
    props.myFavorites.forEach((fav) => {
//      console.log(props);
       if (fav.id === props.id) {
          setIsFav(true);
       }
    });
 // eslint-disable-next-line react-hooks/exhaustive-deps
 }, [props.myFavorites]);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false)
      props.deleteFavorites(props.id)
    }
    else {
      const obj = {
        id: props.id,
        name: props.name,
        species: props.species,
        gender: props.gender,
        image: props.image
      }
      setIsFav(true)
      props.addFavorites(obj)
    }
  }

  return (
    <div className={styles.styleCard}>
      <div className={styles.styleCardContentUp}>
        <div className={styles.botonDiv}>
          <button className={styles.boton} onClick={props.onClose}></button>
        </div>
        <Link className={styles.linkStyle} to={`/detail/${props.id}`}>
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
            {
              isFav ? (
                <button className={styles.favButtonFav} onClick={handleFavorite}>♥</button>
              ) : (
                <button className={styles.favButtonNoFav} onClick={handleFavorite}>♡ </button>
              )
            }
      </div>
      <div className={styles.styleCardContent}>
        <p className={styles.styleLocationLabel}>{props.gender}</p>
        <p className={styles.styleDescription}>{props.species}</p>
      </div>
    </div>
  );
}

export function mapStateToProps(state) {
  return{
    myFavorites: state.myFavorites
  }
}

export function mapDispatchToProps(dispatch){
  return {
    addFavorites: (personaje) => {dispatch(addFavorites(personaje))},
    deleteFavorites: (id) => {dispatch(deleteFavorites(id))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card)