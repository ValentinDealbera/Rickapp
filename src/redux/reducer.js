import { ADD_FAVORITES, DELETE_FAVORITES, FILTER, ORDER } from "./actions";

const initialState = {
  myFavorites: [],
  allCharacters: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITES:
      return {
        ...state,
        myFavorites: [...state.myFavorites, action.payload],
        allCharacters: [...state.myFavorites, action.payload],
      };

    case DELETE_FAVORITES:
      return {
        ...state,
        allCharacters: state.myFavorites.filter((e) => {
          return e.id !== action.payload;
        }),
        myFavorites: state.myFavorites.filter((e) => {
          return e.id !== action.payload;
        }),
      };
    case FILTER:
      const filteredArray = state.allCharacters.filter(
        (c) => c.gender === action.payload
      );
      return {
        ...state,
        myFavorites: filteredArray,
      };

    case ORDER:
      return {
        ...state,
        myFavorites:
          action.payload === "ascendente"
            ? state.allCharacters.sort((a, b) => a.id - b.id)
            : state.allCharacters.sort((a, b) => b.id - a.id),
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
