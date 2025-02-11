import { createContext, useState } from "react";

const ItemsContext = createContext();

const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState(null);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export { ItemsContext, ItemsProvider };
