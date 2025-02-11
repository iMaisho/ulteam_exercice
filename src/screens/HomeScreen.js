import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useContext, useEffect } from "react";
import Item from "../components/Item";
import SearchBar from "../components/SearchBar";
import { ItemsContext } from "../contexts/ItemsContext";
import { SearchTextContext } from "../contexts/SeachTextContext";
import { FilteredItemsContext } from "../contexts/FilteredItemsContext";
import { ErrorContext } from "../contexts/ErrorContext";
import { LoadingContext } from "../contexts/LoadingContext";

function HomeScreen() {
  const { items, setItems } = useContext(ItemsContext);
  const { searchText, setSearchText } = useContext(SearchTextContext);
  const { filteredItems, setFilteredItems } = useContext(FilteredItemsContext);
  const { error, setError } = useContext(ErrorContext);
  const { loading, setLoading } = useContext(LoadingContext);

  useEffect(() => {
    setLoading(true);
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setItems(data);
        setError(null);
      })
      .catch((error) => {
        console.error(error);
        setError(
          "Impossible de charger les articles. Vérifiez votre connexion."
        );
      })
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (items) {
      setFilteredItems(
        items.filter((item) =>
          item.title.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText]);

  return (
    <View>
      <SearchBar />
      {loading ? (
        <ActivityIndicator size="large" color="#00ff00" />
      ) : items ? (
        <FlatList
          data={searchText !== "" ? filteredItems : items}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Item item={item} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text>Erreur de chargement des données</Text>
      )}
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 50,
    borderColor: "000",
    borderWidth: 1,
  },
});
