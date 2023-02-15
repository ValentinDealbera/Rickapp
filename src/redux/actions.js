const ADD_FAVORITES = 'ADD_FAVORITES'
const DELETE_FAVORITES = 'DELETE_FAVORITES'

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

export {ADD_FAVORITES, DELETE_FAVORITES, addFavorites, deleteFavorites}