import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ExercisesProvider } from "./context/exercisesContext";
import { FavoritesProvider } from "./context/favoritesContext";

ReactDOM.render(
  <>
    <ExercisesProvider>
      <FavoritesProvider>
        <App />
      </FavoritesProvider>
    </ExercisesProvider>
  </>,
  document.getElementById("root")
);
