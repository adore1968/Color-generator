import React, { createContext, useContext, useState } from "react";
import Values from "values.js";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
