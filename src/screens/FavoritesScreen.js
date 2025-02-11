import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext, useEffect } from "react";
import Item from "../components/Item";
import { FavoritesContext } from "../contexts/FavoritesContext";

function FavoritesScreen() {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  return (
    <View>
      <FlatList
        data={favorites}
        renderItem={({ item }) => (
          <View>
            <Item item={item} />
          </View>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    padding: 50,
    borderColor: "000",
    borderWidth: 1,
  },
});
