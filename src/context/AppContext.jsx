import React, { createContext, useContext, useState } from "react";
import Values from "values.js";

const AppContext = createContext();

export function AppContextProvider({ children }) {
  const [formText, setFormText] = useState("");
  const [colors, setColors] = useState(new Values("#ff2025").all(5));

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const newColors = new Values(formText).all(5);
      setColors(newColors);
    } catch (error) {
      console.log(error);
    }
    setFormText("");
  };

  return (
    <AppContext.Provider
      value={{ formText, setFormText, colors, handleSubmit }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useGlobalContext = () => {
  return useContext(AppContext);
};
