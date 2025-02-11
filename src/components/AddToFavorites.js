import { Text, TouchableOpacity, StyleSheet } from "react-native";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { ThemeContext } from "../contexts/ThemeContext";
import { useContext } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

function AddToFavorites({ item }) {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const { theme, setTheme } = useContext(ThemeContext);
  const toggleFavorite = () => {
    if (favorites.some((fav) => fav.id === item.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "#green",
      color: "green",
    },

    button: {
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: theme.white,
      padding: 10,
      alignItems: "center",
      height: 50,
      borderWidth: 1,
      borderColor: "000",
    },

    text: {
      paddingLeft: 10,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={toggleFavorite}>
      <Ionicons
        name={
          favorites.some((fav) => fav.id === item.id) ? "star" : "star-outline"
        }
        size={24}
        color={theme.primary}
      />
      <Text style={styles.text}>
        {favorites.some((fav) => fav.id === item.id)
          ? "Retirer des favoris"
          : "Ajouter aux favoris"}
      </Text>
    </TouchableOpacity>
  );
}

export default AddToFavorites;
