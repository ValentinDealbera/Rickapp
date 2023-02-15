import { ADD_FAVORITES, DELETE_FAVORITES } from "./actions"

const initialState = {
    myFavorites: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FAVORITES:
            return {
                ...state,
                myFavorites: [...state.myFavorites, action.payload]
            }
            
        case DELETE_FAVORITES:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((e) => {
                    return e.id !== action.payload
                })
            }

        default:
            return {
                ...state
            }
    }
}

export default reducer