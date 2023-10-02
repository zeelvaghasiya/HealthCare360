import React, { createContext, useContext, useReducer } from "react";
import {initialState, reducer } from "../reducer/UseReducer";

// Create a context
const AppContext = createContext();

// Create a provider component
function AppProvider({ children }) {
  // Define the state and functions you want to share in the context
  const [state, dispatch] = useReducer(reducer, initialState);

  // You can add more state and functions as needed

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export { AppProvider, AppContext };
