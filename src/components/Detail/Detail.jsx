import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import styles from './Detail.module.css'

const Detail = () => {
    const {detailId} = useParams() 
    const [character, setCharacter] = useState({})
    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
          .then((response) => response.json())
          .then((char) => {
            if (char.name) {
              setCharacter(char);
            } else {
              window.alert("No hay personajes con ese ID");
            }
          })
          .catch((err) => {
            window.alert("No hay personajes con ese ID");
          });
        return setCharacter({});
      }, [detailId]);
    return (
        <div className={styles.detail}>
            <h1>Name:{character?.name}</h1>
            <h3>Status:{character?.status}</h3>
            <h3>Specie:{character?.specie}</h3>
            <h3>Gender:{character?.gender}</h3>
            <h3>Origin:{character?.origin?.name}</h3>
            <Link to={'/home'}>
            <button>HOME</button>
            </Link>
            <img src={character?.image} alt="" />
        </div>
    )
}

export default Detail