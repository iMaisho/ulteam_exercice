import { View, Button, StyleSheet } from "react-native";
import { FavoritesContext } from "../contexts/FavoritesContext";
import { useContext } from "react";

function AddToFavorites({ item }) {
  const { favorites, setFavorites } = useContext(FavoritesContext);
  const toggleFavorite = () => {
    if (favorites.some((fav) => fav.id === item.id)) {
      setFavorites(favorites.filter((fav) => fav.id !== item.id));
    } else {
      setFavorites([...favorites, item]);
    }
  };

  return (
    <View style={styles.container}>
      <Button
        title={
          favorites.some((fav) => fav.id === item.id)
            ? "Supprimer des favoris"
            : "Ajouter aux favoris"
        }
        onPress={toggleFavorite}
      />
    </View>
  );
}

export default AddToFavorites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#green",
    color: "green",
  },
});
