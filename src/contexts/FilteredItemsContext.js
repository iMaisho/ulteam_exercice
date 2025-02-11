import { createContext, useState } from "react";

const FilteredItemsContext = createContext();

const FilteredItemsProvider = ({ children }) => {
  const [filteredItems, setFilteredItems] = useState([]);;

  return (
    <FilteredItemsContext.Provider value={{ filteredItems, setFilteredItems }}>
      {children}
    </FilteredItemsContext.Provider>
  );
};

export { FilteredItemsContext, FilteredItemsProvider };