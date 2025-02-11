import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext, useEffect } from "react";
import Item from "../components/Item";
import SearchBar from "../components/SearchBar";
import { ItemsContext } from "../contexts/ItemsContext";
import { SearchTextContext } from "../contexts/SeachTextContext";
import { FilteredItemsContext } from "../contexts/FilteredItemsContext";

function HomeScreen() {
  const { items, setItems } = useContext(ItemsContext);
  const { searchText, setSearchText } = useContext(SearchTextContext);
  const { filteredItems, setFilteredItems } = useContext(FilteredItemsContext);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => {
        setItems(data);
      })
      .catch((error) => console.error(error));
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
      <SearchBar searchText={searchText} setSearchText={setSearchText} />
      {items ? (
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
