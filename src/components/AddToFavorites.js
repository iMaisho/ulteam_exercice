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
    button: {
      flexDirection: "row",
      justifyContent: "center",
      backgroundColor: theme.primary,
      padding: 10,
      alignItems: "center",
      height: 50,
      width: 50,
      borderRadius: 50,
    },
  });

  return (
    <TouchableOpacity style={styles.button} onPress={toggleFavorite}>
      <Ionicons
        name={
          favorites.some((fav) => fav.id === item.id) ? "star" : "star-outline"
        }
        size={24}
        color={
          favorites.some((fav) => fav.id === item.id)
            ? theme.complementary
            : theme.secondary
        }
      />
    </TouchableOpacity>
  );
}

export default AddToFavorites;
