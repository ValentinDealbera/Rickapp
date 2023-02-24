import { useState } from "react"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { Link } from "react-router-dom"
import styles from './Detail.module.css'

const Detail = () => {
    const {detailId} = useParams() 
    const [character, setCharacter] = useState({})
    useEffect(() => {
        fetch(`http://localhost:3001/rickandmorty/detail/${detailId}`)
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
      <div>
        <div className={styles.detail}>
          <div className={styles.text}>
            <h1>Name: {character?.name}</h1>
            <h3>Status :{character?.status}</h3>
            <h3>Specie: {character?.species}</h3>
            <h3>Gender: {character?.gender}</h3>
            <h3>Origin: {character?.origin?.name}</h3>
            <Link to={'/home'}>
            <button className={styles.button}>Home</button>
            </Link>
          </div>
            <img className={styles.img} src={character?.image} alt="" />
        </div>
      </div>
    )
}

export default Detail