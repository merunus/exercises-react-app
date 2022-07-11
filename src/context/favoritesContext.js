import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/favorites_reducer";

const getLocalStorage = () => {
  let cart = localStorage.getItem("favorites");
  if (cart) {
    return JSON.parse(localStorage.getItem("favorites"));
  } else {
    return [];
  }
};

const initialState = {
  favorites: getLocalStorage(),
};

const FavoritesContext = React.createContext();

export const FavoritesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addToFavorites = (exerciseDetails) => {
    const { id, bodyPart, gifUrl, name, target, equipment } = exerciseDetails;
    dispatch({
      type: "ADD_TO_FAVORITES",
      payload: { id, bodyPart, gifUrl, name, target, equipment },
    });
  };

  const removeFromFavorites = (id) => {
    dispatch({
      type: "REMOVE_FROM_FAVORITES",
      payload: { id },
    })
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(state.favorites));
  }, [state.favorites]);

  return (
    <FavoritesContext.Provider
      value={{ ...state, addToFavorites, removeFromFavorites }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => {
  return useContext(FavoritesContext);
};
