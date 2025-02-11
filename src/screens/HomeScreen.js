import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
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
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 110}
      style={styles.container}
    >
      <View style={styles.inner}>
        {loading ? (
          <ActivityIndicator size="large" color="#00ff00" />
        ) : items ? (
          <FlatList
            style={styles.contentContainer}
            data={searchText !== "" ? filteredItems : items}
            renderItem={({ item }) => (
              <View>
                <Item item={item} />
              </View>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        ) : (
          <Text>Erreur de chargement des données</Text>
        )}
        <View style={styles.searchBarContainer}>
          <SearchBar />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  inner: {
    flex: 1,
    justifyContent: "flex-end",
  },

  contentContainer: {
    paddingBottom: -200,
  },

  searchBarContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});
