import { ErrorProvider } from "./ErrorContext";
import { LoadingProvider } from "./LoadingContext";
import { FavoritesProvider } from "./FavoritesContext";
import { FilteredItemsProvider } from "./FilteredItemsContext";
import { ItemsProvider } from "./ItemsContext";
import { SearchTextProvider } from "./SeachTextContext";

export const Providers = ({ children }) => {
  return (
    <ErrorProvider>
      <LoadingProvider>
        <FavoritesProvider>
          <ItemsProvider>
            <FilteredItemsProvider>
              <SearchTextProvider>{children}</SearchTextProvider>
            </FilteredItemsProvider>
          </ItemsProvider>
        </FavoritesProvider>
      </LoadingProvider>
    </ErrorProvider>
  );
};
