import axios from "axios";
const ADD_FAVORITES = "ADD_FAVORITES";
const DELETE_FAVORITES = "DELETE_FAVORITES";
const FILTER = "FILTER";
const ORDER = "ORDER";

const addFavorites = (personaje) => {
  return function (dispatch) {
    axios
      .post("http://localhost:3001/favs/post", personaje)
      .then((response) => {
        console.log(response.data);
        return dispatch({
          type: ADD_FAVORITES,
          payload: response.data,
        });
      });
  };
}

const deleteFavorites = (id) => {
  return function (dispatch) {
    axios.delete("http://localhost:3001/favs/delete/" + id).then((response) => {
      return dispatch({ type: DELETE_FAVORITES, payload: response.data});
    });
  };
};

const filterCards = (gender) => {
  return {
    type: FILTER,
    payload: gender,
  };
};

const orderCards = (id) => {
  return {
    type: ORDER,
    payload: id,
  };
};

export {
  ADD_FAVORITES,
  DELETE_FAVORITES,
  FILTER,
  ORDER,
  addFavorites,
  deleteFavorites,
  orderCards,
  filterCards,
};
