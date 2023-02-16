import { connect, useDispatch } from "react-redux"
import Card from "../Card/Card"
import style from './Favorites.module.css'
import { filterCards, orderCards } from "../../redux/actions"

const Favorites = (props) => {

    const dispatch = useDispatch()
    const selectOrderHandler = (event) => {
        dispatch(orderCards(event.target.value))
    }

    const selectFilterHandler = (event) => {
        dispatch(filterCards(event.target.value))
    }
    return (
    <div>
        <div>
        <select onChange={selectOrderHandler} name='' id=''>
        <option value="order" disabled='disabled'>Order by</option>
        <option value="ascendente">Ascendente</option>
        <option value="descendente">Descendente</option>  
        </select>
        <select onChange={selectFilterHandler} name='' id='' >
        <option value="filter" disabled='disabled'>Filter by</option>
        <option value="Male">Male</option>
        <option value="Female">Female</option>
        <option value="unknown">Unknown</option>
        <option value="Genderless">Genderless</option>
        </select>
        </div>
        <div className={style.favoritesDiv}>
            {
                props.myFavorites.map((e,i) => <Card id={e.id} key={i} name={e.name} species={e.species} gender={e.gender} image={e.image} onClose={() => {props.onClose(e.id)}}/>)
            }
        </div>
    </div>
    )
}

export function mapStateToProps(state){
    return {
        myFavorites: state.myFavorites
    }
}

export default connect(mapStateToProps, null)(Favorites)
