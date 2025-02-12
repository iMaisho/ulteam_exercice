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
import { ThemeContext } from "../contexts/ThemeContext";
import ToggleTheme from "../components/ToggleTheme";

function HomeScreen() {
  const { items, setItems } = useContext(ItemsContext);
  const { searchText, setSearchText } = useContext(SearchTextContext);
  const { filteredItems, setFilteredItems } = useContext(FilteredItemsContext);
  const { error, setError } = useContext(ErrorContext);
  const { loading, setLoading } = useContext(LoadingContext);
  const { theme, setTheme } = useContext(ThemeContext);

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
        items.filter(
          (item) =>
            item.title.toLowerCase().includes(searchText.toLowerCase()) ||
            item.body.toLowerCase().includes(searchText.toLowerCase())
        )
      );
    }
  }, [searchText]);

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },

    itemContainer: {
      flex: 1,
      justifyContent: "flex-end",
      backgroundColor: theme.itemBackground,
      margin: 10,
      borderRadius: 30,
      borderColor: theme.secondary,
      borderWidth: 1,
    },

    searchBarContainer: {
      borderTopColor: theme.secondary,
      borderTopWidth: 1,
      backgroundColor: theme.background,
      position: "absolute",
      bottom: 0,
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
    },
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 90 : 110}
      style={styles.container}
    >
      <View style={styles.container}>
        {loading ? (
          <ActivityIndicator size="large" color="#5b74fe" />
        ) : items ? (
          <FlatList
            data={searchText !== "" ? filteredItems : items}
            renderItem={({ item }) => (
              <View style={styles.itemContainer}>
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
          <ToggleTheme />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
}

export default HomeScreen;
