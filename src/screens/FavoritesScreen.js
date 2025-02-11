import { View, Text, StyleSheet, FlatList } from "react-native";
import { useContext, useEffect } from "react";
import Item from "../components/Item";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { ThemeContext } from "../contexts/ThemeContext";

function FavoritesScreen() {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const { theme, setTheme } = useContext(ThemeContext);

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

    text: {
      color: theme.text,
    },
  });
  return (
    <View style={styles.container}>
      {favorites.length > 0 ? (
        <FlatList
          data={favorites}
          renderItem={({ item }) => (
            <View style={styles.itemContainer}>
              <Item item={item} />
            </View>
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      ) : (
        <Text style={styles.text}>Vous n'avez pas de favoris</Text>
      )}
    </View>
  );
}

export default FavoritesScreen;
