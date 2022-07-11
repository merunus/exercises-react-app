const favorites_reducer = (state, action) => {
  if (action.type === "REMOVE_FROM_FAVORITES") {

    const tempCart = state.favorites.filter(
      (item) => item.id !== action.payload.id
    );
    return { ...state, favorites: tempCart };
  }

  if ((action.type = "ADD_TO_FAVORITES")) {
    const { id, name, target, bodyPart, gifUrl, equipment } = action.payload;

    if (state.favorites.some((item) => item.id === id)) {
      return { ...state };
    } else {
      const newItem = {
        id,
        name,
        target,
        bodyPart,
        gifUrl,
        equipment,
      };
      return {
        ...state,
        favorites: [...state.favorites, newItem],
      };
    }
  }
};

export default favorites_reducer;
