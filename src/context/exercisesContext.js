import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/exercises_reducer";

const initialState = {
  isSidebarOpen: false,
};

const ExercisesContext = React.createContext();

export const ExercisesProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const openSidebar = () => {
    dispatch({ type: "SIDEBAR_OPEN" });
  };
  const closeSidebar = () => {
    dispatch({ type: "SIDEBAR_CLOSE" });
  };

  return (
    <ExercisesContext.Provider value={{ ...state, openSidebar, closeSidebar }}>
      {children}
    </ExercisesContext.Provider>
  );
};

export const useExercisesContext = () => {
  return useContext(ExercisesContext);
};
