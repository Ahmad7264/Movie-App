import React, { Children, createContext, useContext, useState } from "react";
import useFetch from "./useFetch";

const AppContext = createContext();
const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("batman");
  const { isLoading, error, data: movies } = useFetch(`&s=${query}`);

  return (
    <AppContext.Provider value={{ isLoading, error, query, setQuery, movies }}>
      {children}
    </AppContext.Provider>
  );
};
// fetch data from context
export const useGlobalContext = () => useContext(AppContext);
export { AppProvider };
