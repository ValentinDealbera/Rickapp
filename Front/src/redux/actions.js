const ADD_FAVORITES = 'ADD_FAVORITES'
const DELETE_FAVORITES = 'DELETE_FAVORITES'
const FILTER = 'FILTER'
const ORDER = 'ORDER'

const addFavorites = (personaje) => {
    return {
        type: ADD_FAVORITES,
        payload: personaje
    }
}

const deleteFavorites = (id) => {
    return {
        type: DELETE_FAVORITES,
        payload: id
    }
}

const filterCards = (gender) => {
    return {
        type: FILTER,
        payload: gender
    }
}

const orderCards = (id) => {
    return {
        type: ORDER,
        payload: id, 
    }
}

export {ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER, addFavorites, deleteFavorites, orderCards, filterCards}