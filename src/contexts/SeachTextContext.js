import { createContext, useState } from "react";

const SearchTextContext = createContext();

const SearchTextProvider = ({ children }) => {
    const [searchText, setSearchText] = useState("");;

  return (
    <SearchTextContext.Provider value={{ searchText, setSearchText }}>
      {children}
    </SearchTextContext.Provider>
  );
};

export { SearchTextContext, SearchTextProvider };
