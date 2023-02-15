import { connect } from "react-redux"
import Card from "../Card/Card"
import style from './Favorites.module.css'

const Favorites = (props) => {
    return (
        <div className={style.favoritesDiv}>
            {
                props.myFavorites.map((e,i) => <Card id={e.id} key={i} name={e.name} species={e.species} gender={e.gender} image={e.image} onClose={() => {props.onClose(e.id)}}/>)
            }
        </div>
    )
}

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)
